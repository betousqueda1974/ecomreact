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

  return (

    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
      
      <>
        <HeaderAdmin />
        <h1>Panel Administrativo</h1>
         
        <section className='cardAdmin'>
          {productos.map((product) => (
            <li key={product.id}>
              <article className='artAdmin'>
                <button onClick={() => eliminarProducto(product.id)} className='eliProd'>X</button>
                <div className='imgContainerAdm'>
                  <img src={product.imagen} alt="" className='imagen' />
                </div>
                <h3 className='nombre'>{product.nombre}</h3>
                <p className='precio'>${product.precio}</p>
                <p className='stock'>{product.stock}</p>
                <div>                              
                  <Link to={`/admin/${product.id}`}>Editar</Link>
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