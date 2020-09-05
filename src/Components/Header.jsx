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
        <div></div>
        <div className="wrapper-inf">
          <div className="aa"></div>
          <div className="about-we">
            <p></p>
            <p><a>CONÓCENOS</a></p>
            <p><a>INVERSIÓN SOCIAL</a></p>
            <p><a>TALENTO MONTE</a></p>
            <p><a>INSTITUTO DE VALUADORES</a></p>
            <p><a>SALA DE PRENSA</a></p>
            <p></p>
          </div>
        </div>
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
          <li><a className="a-blog">BLOG</a></li>
          <li ><a className="a-register">REGISTRO</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;