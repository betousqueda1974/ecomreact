import React, { useState, useEffect, useContext } from "react";
import AltaProducto from "../components/nofijos/AltaProducto";
import EditarProducto from "../components/nofijos/EditarProducto";
import { AdminContext } from "../../context/AdminContext";
import { CartContext } from "../../context/CartContext";

const Admin = () => {

    const { productos,
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

    const { isAuthenticated, setIsAuth } = useContext(CartContext)

    console.log(productos)

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
                                    <button className="editButton" onClick={() => {
                                    setOpenEditor(true)
                                    setSeleccionado(product)
                                    }}>Editar</button>
                                    <button className="deleteButton" onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                                </div>
                              </section>
                            </li>
                        ))}

                        {/* <Link to={`/galeria/${producto.id}`}>Detalle</Link> */}
               






                    {/* <ul className="list">
                        {productos.map((product) => (
                            <li key={product.id} className="listItem">
                                <img
                                    src={product.imagen}
                                    alt={product.nombre}
                                    className="listItemImage"
                                />
                                <span style={{color: 'black'}}>{product.nombre}</span>
                                <span style={{color: 'blue'}}>${product.precio}</span>
                                <span style={{color: 'red'}}>{product.stock}</span>
                                <div>
                                    <button className="editButton" onClick={()=>{
                                        setOpenEditor(true)
                                        setSeleccionado(product)
                                    }}>Editar</button>

                                    <button className="deleteButton" onClick={()=> eliminarProducto(product.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul> */}





                </>
            )}
            <button onClick={() => setOpen(true)}>Agregar producto nuevo</button>
            {open && (<AltaProducto onAgregar={agregarProducto} />)}
            {openEditor && (<EditarProducto productoSeleccionado={seleccionado} onActualizar={actualizarProducto} />)}
        </div>
    );
};

export default Admin;