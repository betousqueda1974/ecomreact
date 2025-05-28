import React from 'react'
import Header from '../components/fijos/Header'
import Footer from '../components/fijos/Footer'
import ProductList from '../components/nofijos/ProductList'
import loading from '../../assets/loading.gif'

const GaleriaProductos = ({cart, productos, cargando, addToCart, deltoCart}) => {
  return (
    <>
      <Header deltoCart={deltoCart} cartItems={cart}/>
      <h1>Galería de Productos</h1>
      {
          cargando ? <img src={loading} alt='loading'/> :
          <ProductList addToCart={addToCart} productos={productos} />
        }
      <Footer/>
    </>
  )
}

export default GaleriaProductos
