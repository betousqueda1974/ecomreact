import React, { useState, useEffect, useContext } from "react";
import AltaProducto from "../components/nofijos/AltaProducto";
import EditarProducto from "../components/nofijos/EditarProducto";
import { AdminContext } from "../../context/AdminContext";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Admin = () => {

    const { productos, loading, eliminarProducto } = useContext(AdminContext)

    const { isAuthenticated, setIsAuth } = useContext(CartContext)

    const actEstAut = () => {
        setIsAuth(false);
        localStorage.setItem('isAuth', false)
    };

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
                                <a href="/login" onClick={() => actEstAut()}>Logout</a>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="title">Panel Administrativo</h1>

                    {productos.map((product) => (
                        <li key={product.id} className="listItem">
                            <section className='cardAdmin'>
                            <div className='imgContainerAdm'>
                                <img src={product.imagen} alt="" className='imagen' />
                            </div>
                            <h3 className='nombre'>{product.nombre}</h3>
                            <p className='precio'>${product.precio}</p>
                            <p className='stock'>{product.stock}</p>
                            <div>                              
                                <Link to={`/admin/${product.id}`}>Editar</Link>
                                <button className="deleteButton" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                            </div>
                            </section>
                        </li>
                    ))}
                </>
            )}
            <Link to={'/admin/altaProducto'}>Agregar producto nuevo</Link>
        </div>
    );
};

export default Admin;