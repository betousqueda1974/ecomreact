import React, {useContext, useState } from 'react';
import { AdminContext } from '../../../context/AdminContext';
import { Link } from 'react-router-dom';
import HeaderAdmin from '../fijos/HeaderAdmin';
import Footer from '../fijos/Footer';

function AltaProducto() {

  const {agregarProducto} = useContext(AdminContext)
      
  const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        stock: '',
    });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };


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
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) {
      return;
    }
    agregarProducto(producto);
    setProducto({ nombre: '', precio: '', stock: '' }); // Limpiar el formulario
  };

  return (
    <>
      <HeaderAdmin />
      <form onSubmit={handleSubmit}>
        <h2>Agregar Producto</h2>
        
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} required />
            {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
        </div>
        
        <div>
          <label>Precio:</label>
          <input type="number" name="precio" value={producto.precio} onChange={handleChange} required min="0" />
            {errores.precio && <p style={{ color: 'red' }}>{errores.precio}</p>}
        </div>

        <div>
          <label>stock:</label>
          <textarea name="stock" value={producto.stock} onChange={handleChange} required />
            {errores.stock && <p style={{ color: 'red' }}>{errores.stock}</p>}
        </div>
        
        <button type="submit">Agregar Producto</button>
        <Link to={'/admin'} className='detProd'>Regresar</Link>
      </form>
      <Footer/>
    </>
  );
}

export default AltaProducto;