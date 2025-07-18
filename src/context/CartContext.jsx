import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [isAuthenticated, setIsAuth] = useState(false)
  const [busqueda, setBusqueda] = useState("")


  useEffect(() => {
    fetch('/data/data.json')
      .then(respuesta => respuesta.json())
      .then(datos => {
        setTimeout(() => {
          setProductos(datos)
          setCargando(false)
        }, 2000)
      })
      .catch(error => {
        console.log('Error', error)
        setCargando(false)
        setError(true)
      })
  }, [])

  const productosFiltrados = productos.filter((producto) => producto?.nombre.toLowerCase().includes(busqueda.toLowerCase()))

  const handleAddtoCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    }
    else {
      toast.success(`El producto ${product.nombre} fue agregado al carrito`)
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleDeltoCart = (product) => {
    toast.error(`El producto ${product.nombre} fue eliminado del carrito`)
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === product.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          else {
            return null; //Si quantity es 1, lo tenemos que eliminar
          }
        }
        else {
          return item; //Si no es el producto que buscamos, se mantiene
        }
      }).filter(item => item !== null); //Eliminar los productos nulos
    });
  };

  const clearCart = () => {
    setCart([])
    toast.info('Carrito vacío')
  }

  const compraFin = () => {
    setCart([])
    toast.info('Compra realizada')
  }

  return (
    <CartContext.Provider
      value={
        { cart, productos, cargando, error, isAuthenticated, setIsAuth, handleAddtoCart, handleDeltoCart, productosFiltrados, busqueda, setBusqueda, clearCart, compraFin }
      }>
      {children}
    </CartContext.Provider>
  )
}