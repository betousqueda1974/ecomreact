import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const DetalleProducto = () => {

  const {productos} = useContext(CartContext)

  const {id} = useParams()

  const product = productos.find(producto => producto.id == id)

  return (
    <div>

      <h1>Detalle de Producto: {id}</h1>
      {product ? (<h2>NOMBRE: {product.nombre}</h2>, <h2>DESCRIPCION: Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error optio vel ullam soluta voluptatem, cupiditate eaque ratione labore perferendis itaque exercitationem magni. Dolor, maxime amet dignissimos enim adipisci sunt?</h2>)
      : (<p>Producto No Encontrado</p>)}
    </div>
  )
}

export default DetalleProducto
