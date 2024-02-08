import React from 'react'

class HomePage extends React.Component {
  render() {
    return (
      <main id='homePage'>
        <img
          src='/Stories.jpg'
          alt='prototype'
          style={{ width: '100vw', height: 'auto', display: 'block' }}
        />
        <div className='content'>
          <span className='blockquote'>prototype taller de bicicletas</span>
          <p>Ride is only way</p>
          <div className='heigth'></div>
        </div>
          <div>
            <span>Viví la experiencia de rodar con la bici de tus sueño. </span>
          </div>
        <div className='redLine'></div>
      </main>
    )
  }
}

export default HomePage
