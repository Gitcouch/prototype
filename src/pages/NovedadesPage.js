import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../styles/components/pages/NovedadesPage.css';

const NovedadesItem = ({ item }) => (
  <div>
    <h3>{item.titulo}</h3>
    <h4>{item.subtitulo}</h4>
    <p>{item.cuerpo}</p>
  </div>
);

const NovedadesPage = () => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
        setNovedades(response.data);
      } catch (error) {
        console.error('Error al cargar las novedades:', error);
      } finally {
        setLoading(false);
      }
    };
    cargarNovedades();
  }, []);

  return (
    <section className="holder">
      <h2>Novedades</h2>
      {loading ? (
        <p>Cargando</p>
      ) : (
        novedades.map(item => <NovedadesItem key={item.id} item={item} />)
      )}
    </section>
  );
};

export default NovedadesPage;
