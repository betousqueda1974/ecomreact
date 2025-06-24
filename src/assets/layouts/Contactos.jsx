import React from 'react'
import { useContext } from 'react'
import Header from '../components/fijos/Header'
import Footer from '../components/fijos/Footer'
import { CartContext } from '../../context/CartContext'

const Contactos = () => {
  const {cart, handleDeltoCart} = useContext(CartContext)
  return (
    <>
      <Header deltoCart={handleDeltoCart} cartItems={cart}/>
      <h1>Contactos</h1>
      <Footer/>
    </>
  )
}

export default Contactos
