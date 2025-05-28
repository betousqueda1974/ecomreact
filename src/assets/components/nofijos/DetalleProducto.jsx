import React from 'react'
import { useParams } from 'react-router-dom'

const DetalleProducto = ({productos}) => {

  const {id} = useParams()

  const product = productos.find(producto => producto.id == id)

  return (
    <div>
      <h1>Detalle de Producto: {id}</h1>
      {product ? (<h2>{product.nombre}</h2>) : (<p>Producto No Encontrado</p>)}
    </div>
  )
}

export default DetalleProducto
