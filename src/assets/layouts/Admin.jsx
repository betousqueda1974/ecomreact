import React, { useState, useEffect, useContext } from "react";
import AltaProducto from "../components/nofijos/AltaProducto";
import EditarProducto from "../components/nofijos/EditarProducto";
import { AdminContext } from "../../context/AdminContext";

const Admin = () => {

    const {productos,
            loading,
            open,
            setOpen,
            openEditor,
            setOpenEditor,
            seleccionado,
            setSeleccionado,
            agregarProducto,
            actualizarProducto,
            eliminarProducto,
        } = useContext(AdminContext) 

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
                                    <button className="editButton" onClick={()=>{
                                        setOpenEditor(true)
                                        setSeleccionado(product)
                                    }}>Editar</button>

                                    <button className="deleteButton" onClick={()=> eliminarProducto(product.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            <button onClick={()=> setOpen(true)}>Agregar producto nuevo</button>
            {open && (<AltaProducto onAgregar={agregarProducto}/>)}
            {openEditor && (<EditarProducto productoSeleccionado={seleccionado} onActualizar={actualizarProducto}/>)}
        </div>
    );
};

export default Admin;