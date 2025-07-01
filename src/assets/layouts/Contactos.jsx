import React, { useState, useContext } from 'react'
import Header from '../components/fijos/Header'
import Footer from '../components/fijos/Footer'
import { CartContext } from '../../context/CartContext'
import './stylesContactos.css'
import Swal from 'sweetalert2'

const Contactos = () => {
  const { cart, handleDeltoCart } = useContext(CartContext)

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [consulta, setConsulta] = useState('')
  const [error, setError] = useState({})

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    let validationError = {}
    if (!nombre) validationError.nombre = 'Es obligatorio ingresar el nombre'
    if (!apellido) validationError.apellido = 'Es obligatorio ingrear un apellido'
    if (!email) validationError.email = 'Es obligatorio ingresar un e-mail'
    if (!consulta) validationError.consulta = 'Es obligatorio ingrear una consulta'

    if (Object.keys(validationError).length > 0) {
      setError(validationError)
      return
    }

    try {

      Swal.fire({
        title: "Contacto",
        text: "Mensaje enviado correctamente",
        icon: "success"
      });

    }
    catch (err) {
      Swal.fire({
        title: "Contacto",
        text: "No se pudo enviar el mensaje. Intentelo más tarde nuevamente por favor",
        icon: "error"
      });
    }
  }

  return (
    <>
      <Header deltoCart={handleDeltoCart} cartItems={cart} />

      <div className="contenedor">

        <div className="titulodescp">
          <h2>Contáctanos</h2>
          <p> Si tiene alguna pregunta o comentario, no dude en ponerse en contacto con nosotros.
            Nuestro equipo de atención al cliente está disponible de lunes a viernes de 9:00 a 18:00 horas para ayudarlo con cualquier inquietud que tenga.
            Puede enviarnos un mensaje a través de este formulario y nos pondremos en contacto con usted a la brevedad posible.</p>
        </div>


        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6569.677832308327!2d-58.44239482565533!3d-34.58294225639886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb592c98a55a5%3A0x4a8e23f5994d707a!2sGorriti%205801-5899%2C%20C1414BKI%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2snl!4v1729802312717!5m2!1ses-419!2snl" width="100%" height="450" loading="lazy"></iframe>

        <div className="containerform">

          <form onSubmit={handleContactSubmit}  >

            <label for="nombre">Nombre</label>
            <input className="inputContact" type="text" name="firstname" placeholder="Nombre" id="nombre" value={nombre}
              onChange={(e) => setNombre(e.target.value)} />
            <label for="apellido">Apellido</label>
            <input className="inputContact" type="text" name="lastname" placeholder="Apellido" id="apellido" value={apellido}
              onChange={(e) => setApellido(e.target.value)} />
            <label for="telefono">Teléfono</label>
            <input className="inputContact" type="text" name="phone" placeholder="Teléfono" id="telefono" />
            <label for="email">Correo</label>
            <input className="inputContact" type="email" name="correo" placeholder="Email" id="email" value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <label for="consulta">Consulta</label>
            <textarea name="cons" id="consulta" placeholder="Consulta" value={consulta}
              onChange={(e) => setConsulta(e.target.value)}></textarea>
            <button className="buttonContact" type="submit">Enviar</button>

          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contactos
