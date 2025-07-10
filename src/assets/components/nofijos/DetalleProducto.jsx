import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import Header from '../fijos/Header'
import Footer from '../fijos/Footer'
import { Link } from 'react-router-dom'

const DetalleProducto = () => {

  const {productos, cart, handleDeltoCart} = useContext(CartContext)

  const {id} = useParams()

  const product = productos.find(producto => producto.id == id)

  return (
    <>
      <Header deltoCart={handleDeltoCart} cartItems={cart}/>
      <div>
        <h1>Detalle de Producto: {id}</h1>
        {product ? (<h2>NOMBRE: {product.nombre}</h2>, <h2>DESCRIPCION: Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error optio vel ullam soluta voluptatem, cupiditate eaque ratione labore perferendis itaque exercitationem magni. Dolor, maxime amet dignissimos enim adipisci sunt?</h2>)
        : (<p>Producto No Encontrado</p>)}

        <Link to={'/'} className='detProd'>Regresar</Link>
      </div>
    <Footer/>
    </>
  )
}

export default DetalleProducto
