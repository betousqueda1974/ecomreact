import React from 'react'
import { useContext } from 'react'
import Header from '../components/fijos/Header'
import Footer from '../components/fijos/Footer'
import ProductList from '../components/nofijos/ProductList'
import loading from '../../assets/loading.gif'
import { CartContext } from '../../context/CartContext'

  const Home = () => {
    const {cart, productos, cargando, handleAddtoCart, handleDeltoCart, isAuthenticated, setIsAuth} = useContext(CartContext)
  return (
    <>
      <Header deltoCart={handleDeltoCart} cartItems={cart}/>

      <main>
        <h1>Tienda on-line de souvenirs</h1>
        {
          cargando ? <img src={loading} alt='loading'/> :
          <ProductList addToCart={handleAddtoCart} productos={productos} />
        }
      </main>
      
      <Footer/>
    </>
  )
}

export default Home
