import React, { useContext, useState, useEffect } from 'react';
import { AdminContext } from '../../../context/AdminContext';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import HeaderAdmin from '../fijos/HeaderAdmin';
import Footer from '../fijos/Footer';

function EditarProducto() {

    const { actualizarProducto } = useContext(AdminContext)

    const { productos } = useContext(AdminContext)

    const { id } = useParams()

    const product = productos.find(producto => producto.id == id)

    const [producto, setProducto] = useState({
            nombre: '',
            precio: '',
            stock: '',
        });
    
    const [errores, setErrores] = useState({});
    
    const validarFormulario = () => {
      const nuevosErrores = {};
      if (!producto.nombre.trim() || producto.nombre.length < 3) {
        nuevosErrores.nombre = 'El nombre debe tener al menos 3 (tres) caracteres.';
      }
      if (!producto.precio || producto.precio <= 0) {
        nuevosErrores.precio = 'El precio debe ser mayor a 0.';
      }
      if (!producto.stock || producto.stock <= 0) {
        nuevosErrores.stock = 'El stock debe ser mayor a 0';
      }
      setErrores(nuevosErrores);
      console.log(nuevosErrores)
      return Object.keys(nuevosErrores).length === 0;
    };

    useEffect(()=>{
      setProducto(product)
    },[product])

    const handleChange = (e) => {
      const { name, value } = e.target;
      setProducto({ ...producto, [name]: value });
    };

    return (
      <>
        <HeaderAdmin />
        <form onSubmit={(e) => {
            e.preventDefault()
            if (!validarFormulario()) {
                return;
            }
            actualizarProducto(producto)
        }}>
        
          <h2>Editar Producto</h2>
          <div>
            <label>ID:</label>
            <input type="number" name="id" value={producto.id || ''} onChange={handleChange} readOnly />
          </div>
          <div>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={producto.nombre || ''} onChange={handleChange} required />
            {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
          </div>
          <div>
            <label>Precio:</label>
            <input type="number" name="precio" value={producto.precio || ''} onChange={handleChange} required min="0" />
            {errores.precio && <p style={{ color: 'red' }}>{errores.precio}</p>}
          </div>
          <div>
            <label>stock:</label>
            <input type="number" name="stock" value={producto.stock || ''} onChange={handleChange} required />
            {errores.stock && <p style={{ color: 'red' }}>{errores.stock}</p>}
          </div>
          <button type="submit">Actualizar Producto</button>
          <Link to={'/admin'} className='detProd'>Regresar</Link>
        </form>
        <Footer/>               
      </>
    );
}
export default EditarProducto;