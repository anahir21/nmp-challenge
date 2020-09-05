import React from 'react';
import '../Styles/Header.css';

import nmp from '../Static/Images/nmp.jpeg';

const Header = () => {
  return (
    <div className='header-container'>
      <div className="header">
        <div className="wrapper-img">
          <img alt="nmp-img" src={nmp} className="nmp-img"/>
        </div>
        <div className="empty"></div>
        <div className="wrapper-inf"></div>
      </div>
      <nav className="nav-bar">
        <ul>
          <li><a>EMPEÑO DE JOYAS, RELOJES Y VARIOS</a></li>
          <li>AUTOAVANZA</li>
          <li>INFORMACIÓN DE PAGOS</li>
          <li>AVALÚO</li>
          <li>DIRECTORIO DE SERVICIOS</li>
          <li>SUCURSALES</li>
          <li>BLOG</li>
          <li>REGISTRO</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;