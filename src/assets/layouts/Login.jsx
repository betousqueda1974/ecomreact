import React, {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {

  const {isAuthenticated, setIsAuth} = useContext(CartContext)
  const {email, setEmail, password, setPassword, handleSubmit, error} = useContext(AuthContext)

  return (
    <form
      onSubmit={handleSubmit}
      style={{display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: 'auto',}}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="formBasicEmail" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Email address</label>
        <input id="formBasicEmail" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} style={{padding: '0.5rem', border: `1px solid ${error.email ? 'red' : '#ced4da'}`, borderRadius: '0.25rem',}}
        />
        {error.email && (
          <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {error.email}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="formBasicPassword" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Password</label>
        <input id="formBasicPassword" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{padding: '0.5rem', border: `1px solid ${error.password ?'red' : '#ced4da'}`, borderRadius: '0.25rem',}}
        />
        {error.password && (
          <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {error.password}
          </div>
        )}
      </div>

      <button type="submit" style={{backgroundColor: '#007bff', color: 'white', padding: '0.75rem', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', fontSize: '1rem',}}>Submit</button>
    </form>
  )
}

export default Login
