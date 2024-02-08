// @ts-ignore
import axios from 'axios'
import { useState } from 'react'

const ContactosPage = () => {
  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  }

  const [sending, setSending] = useState(false)
  const [msg, setMsg] = useState('')
  const [formData, setFormData] = useState(initialForm)
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(oldData => ({
      ...oldData,
      [name]: value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setMsg('')
    setSending(true)
    const response = await axios.post('http://localhost:3000/api/contacto', formData)
    setSending(false)
    setMsg(response.data.mensaje)
    if (!response.data.error) {
      setFormData(initialForm) 
      setSnackbarOpen(true) 
      setTimeout(() => {
        setSnackbarOpen(false)
      }, 4000)
    }
  }

  return (
    <main>
      <div>
        <h2 className='encabezado'>Ingrese sus datos</h2>
          
        <form action='/contacto' method='post' className='formulario' onSubmit={handleSubmit}>
          <input
            className='formulario__input'
            type='text'
            placeholder='Nombre'
            name='nombre'
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            className='formulario__input'
            type='text'
            placeholder='Ingrese su mail'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className='formulario__input'
            type='text'
            placeholder='Ingrese su telefono'
            name='telefono'
            value={formData.telefono}
            onChange={handleChange}
          />
          <input
            className='formulario__input'
            name='mensaje'
            placeholder='Ingrese un mensaje'
            value={formData.mensaje}
            onChange={handleChange}
          />
          <input type='submit' value='Enviar' />
        </form>
        {sending ? <p>Enviado...</p> : null}
        {msg ? <p>{msg}</p> : null}
      </div>
      <div className='datos'>
        <ul>
          <h2>Otras vías de comunicación</h2>
          <p>También puedes contactarse con nosotros con los siguientes medios</p>
          <p>Teléfono: 1144075787</p>
          <p>Email: prototype@gmail.com</p>
          {/* Enlace de Instagram */}
          <p>
            Proyectos:{" "}
            <a
              href="https://www.instagram.com/fixiecyclingproject?igsh=MTNoM3FodXhuZDgxbg=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              protptype.one.project
            </a>
            Actividades:{" "}
            <a
              href="https://www.instagram.com/maezcycling?igsh=MWZrc2VobXp6cHRhZQ=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              protptype.one.project
            </a>
          </p>
        </ul>
      </div>
      {/* Snackbar */}
      {snackbarOpen && (
        <div className="snackbar">
          Enviado con éxito
        </div>
      )}
    </main>
  )
}

export default ContactosPage
