import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const HeaderAdmin = () => {

  const { isAuthenticated, setIsAuth } = useContext(CartContext)

  const actEstAut = () => {
    setIsAuth(false);
    localStorage.setItem('isAuth', false)
  };

  return (
    <header>
      <nav>
        <ul>
          <li className='menuAdmin'><Link to={'/admin/altaProducto'}>Nuevo producto</Link></li>
          <li className='menuAdmin'> <a href="/login" onClick={() => actEstAut()}><i className="fa-solid fa-right-from-bracket"></i></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderAdmin