import React from 'react'

const Header = ({ children }) => (
  <header>
    <div className='header_brand'>
      <div className='holder'>
        <img src='/images/logo1.png' width='150' alt='prototype' />
      </div>
      <h1>prototype</h1>
    </div>
    {children}
  </header>
)

export default Header
