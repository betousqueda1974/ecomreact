import React, { useState, useEffect } from "react";
import AltaProducto from "../components/nofijos/AltaProducto";
import EditarProducto from "../components/nofijos/EditarProducto";

const Admin = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false)
    const [seleccionado, setSeleccionado] = useState(null)
    const [openEditor, setOpenEditor] = useState(false)

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


    const cargarProductos = async()=>{
        try {
            const res = await fetch("https://685e9e657b57aebd2afa198d.mockapi.io/ecomm-products/productos")
            const data = await res.json()
            setProductos(data)
        } catch (error) {
            console.log('Error al cargar productos ', error);
            
        }
    }


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
        cargarProductos()
        }catch(error){
            console.log(error.message);
            
        }
    }


    const actualizarProducto = async(producto) =>{
        try {
              const respuesta = await fetch(`https://685e9e657b57aebd2afa198d.mockapi.io/ecomm-products/productos/${producto.id}`,
                {method:'PUT',
                    headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
                })
                if(!respuesta.ok) throw Error ('Error al actualizar el producto')
                    const data = await respuesta.json()
                alert('Producto actualizado correctamente')
                setOpenEditor(false)
                setSeleccionado(null)
                cargarProductos()
        } catch (error) {
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
              cargarProductos()
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
                                    {/* <button className="edi tButton">Editar</button> */}
                                    <button className="editButton" onClick={()=>{
                                        setOpenEditor(true)
                                        setSeleccionado(product)
                                    }}>Editar</button>

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
            {openEditor && (<EditarProducto productoSeleccionado={seleccionado} onActualizar={actualizarProducto}/>)}
        </div>
    );
};

export default Admin;