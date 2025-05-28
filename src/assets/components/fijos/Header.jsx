import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './stylesFijos.css'
import Cart from '../nofijos/Cart'

const Header = ({cartItems, deltoCart}) => {

  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/acercade'>Sobre Nosotros</Link></li>
          <li><Link to='/galeria'>Productos</Link></li>
          <li><Link to='/contacto'>Contacto</Link></li>
          <li className='cartNav'>
            <button className='btnCart' onClick={() => setIsCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>            
            <Cart deltoCart={deltoCart} cartItems={cartItems} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}/>
          </li>
        </ul>
      </nav>
    </header>
  )

}

export default Header
