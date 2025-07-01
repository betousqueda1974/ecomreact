import { useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './assets/layouts/Home'
import GaleriaProductos from './assets/layouts/GaleriaProductos'
import AcercaDe from './assets/layouts/AcercaDe'
import Contactos from './assets/layouts/Contactos'
import NotFound from './assets/layouts/NotFound'
import DetalleProducto from './assets/components/nofijos/DetalleProducto'
import Admin from './assets/layouts/Admin'
import RutaProtegida from './auth/RutaProtegida'
import { CartContext } from './context/CartContext'
import Login from './assets/layouts/Login'

function App() {
  const {cart, productos, cargando, error, isAuthenticated, handleAddtoCart, handleDeltoCart} = useContext(CartContext)

  return (
    <>
      {/* <Router> */}
        <Routes>

          <Route path='/' element={<Home />}/>

          <Route path='/galeria' element={<GaleriaProductos />}/>

          <Route path='/acercade' element={<AcercaDe />}/>

          <Route path='/contacto' element={<Contactos />}/>

          <Route path='/galeria/:id' element={<DetalleProducto />}/>

          <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin /> </RutaProtegida>}/>

          <Route path='/login' element={<Login />}/>

          <Route path='*' element={<NotFound/>}/>

        </Routes>
      {/* </Router> */}
    
    </>
  )
}

export default App
