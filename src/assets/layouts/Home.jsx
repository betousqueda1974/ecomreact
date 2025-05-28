import React from 'react'
import Header from '../components/fijos/Header'
import Footer from '../components/fijos/Footer'
import ProductList from '../components/nofijos/ProductList'
import loading from '../../assets/loading.gif'

const Home = ({cart, productos, cargando, addToCart, deltoCart}) => {
  return (
    <>
      <Header deltoCart={deltoCart} cartItems={cart}/>
      
      <main>
        <h1>Tienda on-line de souvenirs</h1>
        {
          cargando ? <img src={loading} alt='loading'/> :
          <ProductList addToCart={addToCart} productos={productos} />
        }
      </main>
      
      <Footer/>
    </>
  )
}

export default Home
