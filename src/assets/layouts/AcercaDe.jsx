import React from 'react'
import { useContext } from 'react'
import Header from '../components/fijos/Header'
import Footer from '../components/fijos/Footer'
import { CartContext } from '../../context/CartContext'

const AcercaDe = () => {
  const {cart, handleDeltoCart} = useContext(CartContext)
  return (
    <>
      <Header deltoCart={handleDeltoCart} cartItems={cart}/>
      
      <h1>Sobre Nosotros</h1>

      <p>Souvenir Company es una tienda en línea dedicada a ofrecer una amplia gama de artículos de souvenirs únicos y de alta calidad. Nuestra pasión por capturar la esencia de tus eventos y celebraciones a través de nuestros productos es lo que nos impulsa a crear un concepto de tienda diferente.</p>
      <p>Desde nuestra fundación en 2020, hemos trabajado con artistas y artesanos locales.</p>
      <p>Nuestro objetivo es brindar a nuestros clientes una experiencia de compra excepcional, donde puedan encontrar recuerdos memorables.</p>


      <h2>Nuestro Equipo</h2>

      <h3>Beto Usqueda</h3>
      <p>Fundador y Director General</p>

      <h3>Lionel Messi</h3>
      <p>Gerente de Operaciones</p>

      <h3>Rodrigo de Paul</h3>
      <p>Gerente de Compras</p>

      <h3>Julián Alvarez</h3>
      <p>Gerente de Marketing</p>

      <Footer/>
    </>
  )
}

export default AcercaDe
