import React from 'react'
import { useContext } from 'react'
import Header from '../components/fijos/Header'
import Footer from '../components/fijos/Footer'
import ProductList from '../components/nofijos/ProductList'
import loading from '../../assets/loading.gif'
import { CartContext } from '../../context/CartContext'

const GaleriaProductos = () => {
  const {cart, productos, cargando, handleAddtoCart, handleDeltoCart} = useContext(CartContext)
  return (
    <>
      <Header deltoCart={handleDeltoCart} cartItems={cart}/>
      <h1>Galería de Productos</h1>
      {
        cargando ? <img src={loading} alt='loading'/> :
        <ProductList addToCart={handleAddtoCart} productos={productos} />
      }
      <Footer/>
    </>
  )
}

export default GaleriaProductos
