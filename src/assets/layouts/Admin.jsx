import React, { useState, useEffect, useContext } from "react";
import AltaProducto from "../components/nofijos/AltaProducto";
import EditarProducto from "../components/nofijos/EditarProducto";
import { AdminContext } from "../../context/AdminContext";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import HeaderAdmin from "../components/fijos/HeaderAdmin";
import Footer from "../components/fijos/Footer";

const Admin = () => {

    const { productos, loading, eliminarProducto } = useContext(AdminContext)

    /* const { isAuthenticated, setIsAuth } = useContext(CartContext)

    const actEstAut = () => {
        setIsAuth(false);
        localStorage.setItem('isAuth', false)
    }; */

    return (

        
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                <HeaderAdmin />
                    {/* <nav>
                        <ul>
                            
                            <li>
                              <Link to={'/admin/altaProducto'}>Nuevo Producto</Link>
                            </li>
                            <li>
                              <a href="/login" onClick={() => actEstAut()}><i className="fa-solid fa-right-from-bracket"></i></a>
                            </li>
                        </ul>
                    </nav> */}
                    <h1>Panel Administrativo</h1>
                
                    <section className='cardAdmin'>
                      {productos.map((product) => (
                        <li key={product.id}>
                          <article className='artAdmin'>
                            <div className='imgContainerAdm'>
                                <img src={product.imagen} alt="" className='imagen' />
                            </div>
                            <h3 className='nombre'>{product.nombre}</h3>
                            <p className='precio'>${product.precio}</p>
                            <p className='stock'>{product.stock}</p>
                            <div>                              
                              <Link to={`/admin/${product.id}`}>Editar</Link>
                              <button onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                            </div>
                          </article>
                        </li>
                    ))}
                  </section>
                  <Footer/>               
                </>
            )}
        </div>
    );
};

export default Admin;