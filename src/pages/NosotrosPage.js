const imagenes = [
  'imagen2.jpg',
  'imagen3.jpg',
  'imagen4.jpg',
  'imagen5.jpg',
  'imagen6.jpg',
  'imagen7.jpg',
]
const NosotrosPage = () => {
  return (
    <main id='nosotrosPage'>
      <div className='historia'>
        <div className='image-gallery'>
          {imagenes.map(imagen => (
            <div style={{ backgroundImage: `url("/images/${imagen}")` }} />
          ))}
        </div>
        <h2 style={{ cursor: 'pointer' }}>Nuestros proyectos</h2>
        <p>
          "Nuestro proyectos son el motor del taller, transformamos la pasión en el objeto de
          transporte más bello jamás inventado para viajar. ¡Únete y conquista nuevos caminos!"
        </p>
        <br />
        <p>
          Contamos con todo lo necesario para que desarrolles y personalices tu bike, fixie, de
          ruta, gravel y MTB.
        </p>
        <p>Crea sueña y haste de todas las miradas.</p>
      </div>
    </main>
  )
}
export default NosotrosPage
