import React, { useState } from "react";
import axios from "axios";
import "../styles/components/pages/ContactosPage.css";

const ContactosPage = (props) => {
  const initialForm = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/contacto`,
      formData
    );
    setSending(false);
    setMsg(response.data.mensaje);
    if (!response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <main className="holder contacto">
      <div>
        <h2>Ingrese sus datos</h2>
        <form
          action="/contacto"
          method="post"
          className="formulario"
          onSubmit={handleSubmit}
        >
          <p>
            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Ingrese su mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Ingrese su telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </p>
          <p>
            <textarea
              name="mensaje"
              placeholder="Ingrese un mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </p>

          {sending ? <p>Enviado...</p> : null}
          {msg ? <p>{msg}</p> : null}
          <p className="acciones">
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div className="datos">
        <h2>Otras vías de comunicación</h2>
        <p>
          También puede contactarse con nosotros usando los siguientes medios
        </p>
        <ul>
          <li>Teléfono: 1144075787</li>
          <li>Email: prototype@gmail.com</li>
          <li>Instagram: protptype.one.project</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactosPage;
