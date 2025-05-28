import React from 'react'
import Header from '../components/fijos/Header'
import Footer from '../components/fijos/Footer'

const Contactos = ({cart, deltoCart}) => {
  return (
    <>
      <Header deltoCart={deltoCart} cartItems={cart}/>
      <h1>Contactos</h1>
      <Footer/>
    </>
  )
}

export default Contactos
