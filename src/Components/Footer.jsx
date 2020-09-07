import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="schedule">
        <div></div>
        <div className="info-schedule">
          <p className="p-info-schedule">
            <span>Horarios de Atención Telefónica</span>
          </p>
          <strong className="p-strong">800 EL MONTE (800 35 666 83)</strong>{" "}
          <br />
          <p className="details-schedule">
            Lunes a Viernes de 8:00 a 20:00 <br />
            <br /> Sábados de 8:00 a 16:00
          </p>
        </div>
        <div>
          <p className="p-info-schedule">
            <span>Horarios de Sucursales</span>
          </p>
          <strong className="p-strong">Atención general</strong>
        </div>
        <div>
          <p className="p-info-schedule">
            <span>Horarios de Casa Matriz</span>
          </p>
          <strong className="p-strong">Tienda Monte</strong>
        </div>
        <div>
          <strong className="p-strong">Desempeño / Refrendo</strong>
        </div>
        <div>
          <strong className="p-strong">Empeño</strong>
        </div>
        <div></div>
      </div>
      <div className="announcements">
        <div></div>
        <div className="announcements-a">
          <p className="p-announcements">AVISOS Y REGULATORIO</p>
          <p>
            Registro público de casas de empeño <br />
            Contratos registrados ante profeco <br /> ¿Qué es el CAT y cómo se
            calcula? <br /> Calculadora de CAT
          </p>
        </div>
        <div className="announcements-b">
          <p className="p-announcements">EMPLEADOS Y PROVEEDORES</p>
          <p>
            Facturación Electrónica <br /> Acceso Empleados <br /> Acceso VPN{" "}
            <br />
            Recepción de Facturación
          </p>
        </div>
        <div className="announcements-c">
          <p className="p-announcements">AVISOS DE PRIVACIDAD</p>
          <p>
            Aviso de Privacidad <br />
            Aviso de Privacidad Donatarias <br />
            Aviso de Privacidad Solicitantes de Empleo <br />
            Aviso de Privacidad Proveedores <br />
            Derechos Arco
          </p>
        </div>
        <div className="announcements-d">
          <p className="p-announcements">USO DE REDES SOCIALES E INTERNET</p>
          <p>
            Condiciones de uso de Redes Sociales <br />
            Mecanismos para deshabilitar cookies
          </p>
        </div>
        <div></div>
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
