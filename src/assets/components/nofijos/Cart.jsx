import React, {useContext} from 'react'
import './stylesCart.css'
import { CartContext } from '../../../context/CartContext'

const Cart = ({cartItems, isOpen, onClose, deltoCart}) => {
  
  const { cart, handleDeleteFromCart, clearCart, compraFin } = useContext(CartContext)

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      
      <div className='cart-header'>
        <h2 style={{color:'black'}}>Carrito de compras</h2>
        <button onClick={onClose} className='close-button'>X</button>
      </div>

      <div className='cart-content'>
        {cartItems.length === 0 ? (<p style={{color:'red'}}>El carrito está vacío</p>) : (
          <ul className='cart-item'>
            {cartItems.map((item, index)=>(
              <>
                <li key={item.id} style={{color:'black'}}>
                  {item.nombre} - {item.precio} - (+ {item.quantity})
                  <button onClick={() => deltoCart(item)}><i className="fa-solid fa-trash"></i></button>
                </li>
              </>  
            ))}
            <><button onClick={()=> clearCart()}>Vaciar Carrito</button></>
            <><button onClick={()=> compraFin()}>Finalizar Compra</button></>
          </ul>)}
      </div>

    </div>
  )
}

export default Cart
