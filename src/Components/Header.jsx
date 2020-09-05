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
        <div></div>
        <ul>
          <li><a>EMPEÑO DE JOYAS, <br/> RELOJES Y VARIOS</a></li>
          <li id="one-word"><a>AUTOAVANZA</a></li>
          <li className="two-words"><a>INFORMACIÓN <br/> DE PAGOS</a></li>
          <li><a>AVALÚO</a></li>
          <li><a>DIRECTORIO <br/> DE SERVICIOS</a></li>
          <li><a>SUCURSALES</a></li>
          <li><a>BLOG</a></li>
          <li><a>REGISTRO</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;