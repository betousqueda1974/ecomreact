import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <button> <Link to='/'>Regresar Página Principal</Link></button>
    </div>
  )
}

export default NotFound