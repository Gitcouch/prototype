import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <main id='homePage'>
        <img src='/Stories.jpg' alt='prototype' style={{ width: '100vw', height: 'auto', display: 'block' }} />
        <div className='content'>
          <p>Ride is only way</p>
          <div>
            <span className='blockquote'>prototype taller de bicicletas</span>
          </div>
        </div>
          <div className='redLine'></div>
      </main>
    );
  }
}

export default HomePage;
