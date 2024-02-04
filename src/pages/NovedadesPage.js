import React, { useState, useEffect } from "react";
import axios from "axios";
import NovedadesItem from "../componets/novedades/NovedadItem";

import "../styles/components/pages/NovedadesPage.css";

const NovedadesPage = () => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          // `${process.env.REACT_APP_API_URL}/api/novedades`
          'http://localhost:3000/api/novedades'
        );
        setNovedades(response.data);
      } catch (error) {
        console.error("Error al cargar las novedades:", error);
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
        <p>Cargando...</p>
      ) : (
        novedades.map((item) => (
          <NovedadesItem
            key={item.id}
            title={item.titulo}
            subtitle={item.subtitulo}
            imagen={item.imagen}
            item={item}
            body={item.cuerpo}
          />
        ))
      )}
    </section>
  );
  
};

export default NovedadesPage;
