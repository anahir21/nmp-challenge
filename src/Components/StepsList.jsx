import React from "react";
import RedButton from "../assets/RedButton";
import iconform from "../Static/Images/icon1-form.png";
import iconcomputer from "../Static/Images/icon2-computer.png";
import iconman from "../Static/Images/icon3-man.png";
import iconfolder from "../Static/Images/icon4-folder.png";
import icondoctor from "../Static/Images/icon5-doctor.png";
import iconhouse from "../Static/Images/icon6-house.png";

import "../Styles/StepsList.css";

const StepsList = () => {
  return (
    <div className="wrapper-stepslist">
      <div>
        <p className="p-title-process">¿Cómo será tu proceso de postulación?</p>
      </div>
      <div className="div-container-icon-rigth">
        <div className="wrapper-btn-information">
          <RedButton step="1" />
          <div className="">
            <p>
              <b>CV y solicitud de empleo</b>
            </p>
            <p>
              Una vez que hayas llenado el{" "}
              <b>
                formulario de <br /> postulación
              </b>
              , accede a tu página personal donde <br /> podrás subir tu CV y tu
              solicitud de empleo.
            </p>
          </div>
        </div>
        <div>
          <img alt="logo1" src={iconform} className="icon-form" />
        </div>
      </div>
      <div className="div-container-icon-left">
        <img alt="logo2" src={iconcomputer} className="icon-computer" />
        <div className="wrapper-btn-information btn-red-rigth">
          <RedButton step="2" />
          <div>
            <p>
              <b>Realiza tus evaluaciones</b>
            </p>
            <p>
              Donde encontrarás las ligas para completar tus <br /> evaluaciones
              en línea.
            </p>
          </div>
        </div>
      </div>
      <div className="div-container-icon-rigth">
        <div className="wrapper-btn-information">
          <RedButton step="3" />
          <div>
            <p>
              <b>Prepárate para tus entrevistas</b>
            </p>
            <p>
              En tu página personal te indicaremos la fecha y hora <br /> de tus
              entrevistas con el reclutador y otros <br /> integrantes del
              equipo de NMP.
            </p>
          </div>
        </div>
        <img alt="logo3" src={iconman} className="icon-man" />
      </div>
      <div className="div-container-icon-left">
        <img alt="logo4" src={iconfolder} className="icon-folder" />
        <div className="wrapper-btn-information btn-red-rigth-top">
          <RedButton step="4" />
          <div>
            <p>
              <b>Documentación</b>
            </p>
            <p>
              Si los resultados de tus evaluaciones y entrevista <br /> son
              positivos, tendrás que subir tus documentos en <br /> la
              plataforma.
            </p>
          </div>
        </div>
      </div>
      <div className="div-container-icon-rigth">
        <div className="wrapper-btn-information">
          <RedButton step="5" />
          <div>
            <p>
              <b>Examen médico</b>
            </p>
            <p>
              Eligirás entre dos sucursales de análisis clínicos <br /> para
              realizarte unas pruebas.
            </p>
          </div>
        </div>
        <img alt="logo5" src={icondoctor} className="icon-doctor" />
      </div>
      <div className="div-container-icon-left">
        <img alt="logo6" src={iconhouse} className="icon-house" />
        <div className="wrapper-btn-information btn-red-rigth-top">
          <RedButton step="6" />
          <div>
            <p>
              <b>Estudio socioeconómico</b>
            </p>
            <p>
              Un investigador de NMP asistirá a tu domicilio para <br /> recabar
              información sobre tu situación <br /> socioeconómica.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <input
            type="checkbox"
            className="checkbox-politics"
            id="politics"
            name="politics"
            value="politics"
          />
          <label for="politics" className="politics">
            Acepto los{" "}
            <a href="# " className="a-politics">
              términos y condiciones
            </a>{" "}
          </label>
        </div>
        <button className="btn-form" type="submit">
          COMENZAR
        </button>
      </div>
    </div>
  );
};

export default StepsList;
