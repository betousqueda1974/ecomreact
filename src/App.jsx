import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './assets/layouts/Home'
import GaleriaProductos from './assets/layouts/GaleriaProductos'
import AcercaDe from './assets/layouts/AcercaDe'
import Contactos from './assets/layouts/Contactos'
import NotFound from './assets/layouts/NotFound'
import DetalleProducto from './assets/components/nofijos/DetalleProducto'
import Admin from './assets/layouts/Admin'
import RutaProtegida from './auth/RutaProtegida'

function App() {

  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [isAuthenticated, setIsAuth] = useState(false)

  useEffect(()=>{
    fetch('/data/data.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
      setTimeout(() => {
        setProductos(datos)
        setCargando(false)
      }, 2000)
    })
    .catch(error =>{
      console.log('Error', error)
      setCargando(false)
      setError(true)
    })
  },[])

  const handleAddtoCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart){
      setCart(cart.map((item) => item.id === product.id ? {...item, quantity:item.quantity + 1} : item));
    }
    else {
      setCart([...cart, {...product, quantity:1}]);
    }
  };

  const handleDeltoCart = (product) => {
    setCart(prevCart => {
      return prevCart.map (item => {
        if (item.id === product.id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1};
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

  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Home deltoCart={handleDeltoCart} addToCart={handleAddtoCart} cart={cart} productos={productos} cargando={cargando}/>}/>

          <Route path='/galeria' element={<GaleriaProductos deltoCart={handleDeltoCart} addToCart={handleAddtoCart} cart={cart} productos={productos} cargando={cargando}/>}/>

          <Route path='/acercade' element={<AcercaDe deltoCart={handleDeltoCart} cart={cart}/>}/>

          <Route path='/contacto' element={<Contactos deltoCart={handleDeltoCart} cart={cart}/>}/>

          <Route path='/galeria/:id' element={<DetalleProducto productos={productos}/>}/>

          <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin deltoCart={handleDeltoCart} cart={cart}/> </RutaProtegida>}/>

          <Route path='*' element={<NotFound/>}/>

        </Routes>
      </Router>
    
    </>
  )
}

export default App
