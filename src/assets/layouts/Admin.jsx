/* import React from 'react'
import { useContext } from 'react'
import Header from '../components/fijos/Header'
import Footer from '../components/fijos/Footer'
import { CartContext } from '../../context/CartContext'

const Admin = () => {
  const {cart, handleDeltoCart} = useContext(CartContext)
  return (
    <div>
      <Header deltoCart={handleDeltoCart} cartItems={cart}/>
      <h1>Sólo para ser usado por un Administrador</h1>
      <Footer/>
    </div>
  )
}

export default Admin
 */

import React, { useState, useEffect } from "react";
import AltaProducto from "../components/nofijos/AltaProducto";

const Admin = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetch("https://685e9e657b57aebd2afa198d.mockapi.io/ecomm-products/productos")
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const agregarProducto = async (producto) =>{
        try{
            const respuesta = await fetch('https://685e9e657b57aebd2afa198d.mockapi.io/ecomm-products/productos',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
        })
        if(!respuesta.ok){
            throw new Error('Error al agregar producto')
        }
        const data = await respuesta.json()
        alert('Producto agregado correctamente')
        }catch(error){
            console.log(error.message);
            
        }
    }

    const eliminarProducto = async (id)=>{
      const confirmar = window.confirm('Estas seguro de eliminar el producto?')
      if (confirmar) {
        try{
          const respuesta = await fetch(`https://685e9e657b57aebd2afa198d.mockapi.io/ecomm-products/productos/${id}`,{
          method:'DELETE',
          })
            if(!respuesta.ok) throw Error('Error al eliminar')
              alert('Producto Eliminado correctamente')
            //   cargarProductos()
            }catch(error){
               alert('Hubo un problema al eliminar el producto')
            }
        }
    }

    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <nav>
                        <ul className="nav">
                            {/* <li className="navItem">
                                <button className="navButton">
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li> */}
                            <li className="navItem">
                                <a href="/admin">Logout</a>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="title">Panel Administrativo</h1>

                    <ul className="list">
                        {productos.map((product) => (
                            <li key={product.id} className="listItem">
                                <img
                                    src={product.imagen}
                                    alt={product.nombre}
                                    className="listItemImage"
                                />
                                <span>{product.nombre}</span>
                                <span>${product.precio}</span>
                                <div>
                                    <button className="editButton">Editar</button>

                                    {/* <button className="deleteButton">Eliminar</button> */}
                                    <button className="deleteButton" onClick={()=> eliminarProducto(product.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            <button onClick={()=> setOpen(true)}>Agregar producto nuevo</button>
            {open && (<AltaProducto onAgregar={agregarProducto}/>)}
        </div>
    );
};

export default Admin;