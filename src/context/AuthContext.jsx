import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const { setIsAuth } = useContext(CartContext)

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuth') === 'true'
    if (isAuthenticated) {
      setIsAuth(true)
      navigate('/admin')
    }
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()
    let validationError = {}
    if (!email) validationError.email = 'Es obligatorio ingresar un e-mail'
    if (!password) validationError.password = 'Es obligatorio ingrear un password'

    if (Object.keys(validationError).length > 0) {
      setError(validationError)
      return
    }

    try {

      const res = await fetch('data/users.json')
      const users = await res.json()

      const foundUser = users.find((user) => user.email === email && user.password === password)

      setIsAuth(false)
      if (!foundUser) {
        setError({ email: 'Credenciales inválidas' })
      } else {
        if (foundUser.role === 'admin') {
          setIsAuth(true)
          localStorage.setItem('isAuth', true)
          navigate('/admin')
        } else {
          setIsAuth(false);
          navigate('/');
        }
      }

    }
    catch (err) {
      setError({ email: 'Hubo algún error. Intentalo más tarde por favor' })
    }

  }

  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword, handleSubmit, error }}>
      {children}
    </AuthContext.Provider>
  );
};
