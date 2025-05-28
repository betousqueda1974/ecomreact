import React from 'react'
import Productos from './Productos'

const ProductList = ({productos, addToCart}) => {
  return (
    <>
      <h1>Souvenirs Publicados</h1>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'} }>
        {
          
          productos.map(producto => (
            <Productos key={producto.id} producto={producto} addToCart={addToCart}/>
          ))
        }
      </div>
    </>
  )
}

export default ProductList
