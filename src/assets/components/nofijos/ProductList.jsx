import React, { useContext } from 'react'
import Productos from './Productos'
import { CartContext } from '../../../context/CartContext'

const ProductList = ({productos, addToCart}) => {

  const {productosFiltrados, busqueda, setBusqueda} = useContext(CartContext)

  console.log(busqueda)

  return (
    <>
      <h1>Souvenirs Publicados</h1>

        <input 
            type='text'
            placeholder='Buscar productos...'
            value={busqueda}
            onChange={(e)=> setBusqueda(e.target.value)}
            />

      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'} }>
        {
          
          productosFiltrados.map(producto => (
            <Productos key={producto.id} producto={producto} addToCart={addToCart}/>
          ))
        }
      </div>
    </>
  )
}

export default ProductList
