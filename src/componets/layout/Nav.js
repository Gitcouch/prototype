import React from "react";
import { NavLink } from "react-router-dom"
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined } >Home</NavLink></li>
          <li><NavLink to="/osotros" className={({ isActive }) => isActive ? "activo" : undefined } >Nosotros</NavLink></li>
          <li><NavLink to="/Novedades" className={({ isActive }) => isActive ? "activo" : undefined } >Novedades</NavLink></li>
          <li><NavLink to="/Contacto" className={({ isActive }) => isActive ? "activo" : undefined } >Contacto</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
