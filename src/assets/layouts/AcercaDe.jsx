import React from 'react'
import Header from '../components/fijos/Header'
import Footer from '../components/fijos/Footer'

const AcercaDe = ({cart, deltoCart}) => {
  return (
    <>
      <Header deltoCart={deltoCart} cartItems={cart}/>
      <h1>Acerca de</h1>
      <Footer/>
    </>
  )
}

export default AcercaDe
