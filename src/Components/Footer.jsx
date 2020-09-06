import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="schedule">
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
        <div>e</div>
      </div>
      <div className="announcements">
        <div>x</div>
        <div>w</div>
        <div>y</div>
        <div>z</div>
      </div>
      <div className="wrapper-final-footer">
        <p className="address">
          Nacional Monte de Piedad I.A.P. <br /> Blvd. Manuel Ávila Camacho No.
          32, Col. Lomas de Chapultepec III Sección , C.P. 11000 <br /> Ciudad
          de México
        </p>
        <p className="customer-service">
          <strong>
            Servicios al Cliente <br /> 800 EL MONTE (35 666 83) y 55-8890-9717
          </strong>{" "}
          <br />
          servicioaclientes@montepiedad.com.mx
        </p>
        <p className="regulation">
          Cualquier acción violatoria a nuestro Código de Conducta, leyes y
          reglamentos comunícate a:
          <br />
          <strong>800-88-54632</strong>
          <br />
          (800 - TU - LINEA)
          <br />
          <a href="# " className="a-footer">
            tulineaetica@tipsanonimos.com
          </a>
          <br />
          <a href="# " className="a-footer">
            www.tipsanonimos.com/tulineaetica
          </a>
        </p>
        <p className="rights-reserved">Todos los derechos reservados 2020</p>
      </div>
    </div>
  );
};

export default Footer;
