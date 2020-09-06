import React from 'react';
import '../Styles/Header.css';

import nmp from '../Static/Images/nmp.png';
import logotel from '../Static/Images/logo-tel.png'

import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

import { AiFillYoutube } from "react-icons/ai";

const Header = () => {
  return (
    <div className='header-container'>
      <div className="header">
        <div className="wrapper-img"><a href="https://www.montepiedad.com.mx/">
          <img alt="nmp-img" src={nmp} className="nmp-img"/>
        </a>
        </div>
        <div></div>
        <div className="wrapper-inf">
          <div className="aa">
            <div>
              <img alt="nmp-img" src={logotel} className="img-logo-tel"/>
            </div>
            <div><a href="https://www.montepiedad.com.mx/contacto" className="a-contact">Contacto</a></div>
            <div><a href="https://www.montepiedad.com.mx/preguntas-frecuentes"  className="a-questions">Preguntas Frecuentes</a></div>
            <div><a href="https://www.facebook.com/nacionalmontedepiedad" target="_blank">
              <AiFillFacebook className="icon-react icon-fb"  />
            </a>
            <a href="https://twitter.com/nmontepiedad" target="_blank">
              <AiOutlineTwitter className="icon-react icon-twitter" />
            </a>
            <a href="https://www.youtube.com/c/nacionalmontedepiedad" target="_blank">
              <AiFillYoutube className="icon-react icon-u2"/>
            </a>
            </div>
            <div><button className="btn-monte"><a href="https://mimonte.montepiedad.com.mx/login">PAGO EN LÍNEA</a></button></div>
            <div><button className="btn-monte"><a href="https://tienda.montepiedad.com.mx/?utm_source=montepiedad.com.mx&utm_medium=button&utm_campaign=sitio%20principal">TIENDA MONTE EN LÍNEA</a></button></div>
            <div><button className="btn-promo"><a href="https://www.montepiedad.com.mx/promociones">PROMOCIONES</a></button></div>
          </div>
          <div className="about-we">
            <p></p>
            <p><a href="https://www.montepiedad.com.mx/conocenos-filosofia">CONÓCENOS</a></p>
            <p><a href="https://inversionsocial.montepiedad.com.mx/" target="_blank">INVERSIÓN SOCIAL</a></p>
            <p><a href="https://www.montepiedad.com.mx/vacantes/">TALENTO MONTE</a></p>
            <p><a href="https://www.montepiedad.com.mx/instituto-de-valuadores">INSTITUTO DE VALUADORES</a></p>
            <p><a href="https://www.montepiedad.com.mx/sala-de-prensa/">SALA DE PRENSA</a></p>
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
          <li><a href="https://www.montepiedad.com.mx/avaluo">AVALÚO</a></li>
          <li><a href="https://www.montepiedad.com.mx/directorio-de-servicios">DIRECTORIO <br/> DE SERVICIOS</a></li>
          <li><a href="https://www.montepiedad.com.mx/contingenciacovid-sucursalesenoperacion">SUCURSALES</a></li>
          <li><a href="https://www.montepiedad.com.mx/blog/" className="a-blog">BLOG</a></li>
          <li ><a className="a-register">REGISTRO</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;