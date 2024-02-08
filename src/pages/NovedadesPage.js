import React, { useState, useEffect } from 'react'
// @ts-ignore
import axios from 'axios'
import NovedadesItem from '../componets/novedades/NovedadItem'

import { Flex, Spin } from '../../node_modules/antd/es/index'

const NovedadesPage = () => {
  const [loading, setLoading] = useState(false)
  const [novedades, setNovedades] = useState([])

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          'http://localhost:3000/api/novedades',
        )
        setNovedades(response.data)
      } catch (error) {
        console.error('Error al cargar las novedades:', error)
      } finally {
        setLoading(false)
      }
    }
    cargarNovedades()
  }, [])

  return (
    <main>
      <div className='card'>
      <h2>Novedades</h2>
      {loading ? (
        <Spin tip='Cargando...' />
      ) : (
        <Flex style={{ gap: '0.8rem', maxheigth: '0rem' }}>
          {novedades.map(item => (
            <NovedadesItem
              key={item.id}
              title={item.titulo}
              subtitle={item.subtitulo}
              imagen={item.imagen}
              body={item.cuerpo}
            />
          ))}
        </Flex>
      )}
      </div>
    </main>
  )
}

export default NovedadesPage
