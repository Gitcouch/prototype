import React from 'react'
// @ts-ignore
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='shadows'>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : undefined)}>
        Home
      </NavLink>
      <NavLink to='/nosotros' className={({ isActive }) => (isActive ? 'active' : undefined)}>
        Taller
      </NavLink>
      <NavLink to='/novedades' className={({ isActive }) => (isActive ? 'active' : undefined)}>
        Ingresos
      </NavLink>
      <NavLink to='/contacto' className={({ isActive }) => (isActive ? 'active' : undefined)}>
        Contacto
      </NavLink>
    </nav>
  )
}

export default Nav
