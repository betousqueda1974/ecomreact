import React from 'react'
import Header from '../components/fijos/Header'
import Footer from '../components/fijos/Footer'

const Admin = ({cart, deltoCart}) => {
  return (
    <div>
      <Header deltoCart={deltoCart} cartItems={cart}/>
      <h1>Sólo para ser usado por un Administrador</h1>
      <Footer/>
    </div>
  )
}

export default Admin
