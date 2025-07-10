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
        <ul className="nav">
          <li><Link to={'/admin/altaProducto'}>Nuevo producto</Link></li>

          {/* <li className="navItem">
              <button className="navButton">
                  <i className="fa-solid fa-right-from-bracket"></i>
              </button>
            </li> */}
          <li> <a href="/login" onClick={() => actEstAut()}><i className="fa-solid fa-right-from-bracket"></i></a></li>
          {/* <li className="navItem"> <a href="/login" onClick={() => actEstAut()}>Logout</a> </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default HeaderAdmin