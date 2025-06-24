import React from 'react'
import { useContext } from 'react'
import Header from '../components/fijos/Header'
import Footer from '../components/fijos/Footer'
import { CartContext } from '../../context/CartContext'

const Admin = () => {
  const {cart, handleDeltoCart} = useContext(CartContext)
  return (
    <div>
      <Header deltoCart={handleDeltoCart} cartItems={cart}/>
      <h1>Sólo para ser usado por un Administrador</h1>
      <Footer/>
    </div>
  )
}

export default Admin
