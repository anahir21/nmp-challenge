import React, { useState } from "react";
import RedButton from "../assets/RedButton";
import iconform from "../Static/Images/icon1-form.png";
import iconcomputer from "../Static/Images/icon2-computer.png";
import iconman from "../Static/Images/icon3-man.png";
import iconfolder from "../Static/Images/icon4-folder.png";
import icondoctor from "../Static/Images/icon5-doctor.png";
import iconhouse from "../Static/Images/icon6-house.png";
import { useHistory } from "react-router-dom";
import { useToasts } from 'react-toast-notifications'

import "../Styles/StepsList.css";

const StepsList = () => {
  
  const history = useHistory();
  const { addToast } = useToasts()
  let [btnClass, setBtnClass] = useState('btn-disabled');
    
  const politicsChecked = () => {
    if(document.getElementById("politics").checked){
      setBtnClass('btn-enabled');
    }else{
      setBtnClass('btn-disabled');
    }
  }  
    
  const beginBtn = () => {
    if(document.getElementById("politics").checked){
      getWelcomeMsg();
      history.push('/profile');
    }else{
      addToast('Debes aceptar los términos y condiciones antes de continuar', { 
        autoDismiss: true, 
        placement: 'top-right', 
        appearance: 'error' })
    }
  }

  let getWelcomeMsg=async()=>{
    let url="http://localhost:4000/welcome"
    let getFetchUrl=await fetch(url).then(result=>result.json())
    console.log(getFetchUrl)
    //setMensaje(getFetchUrl)
  }
    
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
              <span><b>CV y solicitud de empleo</b></span>
            </p>
            <p>
             Inicia sesión para acceder a tu página personal y sube tu CV y Solictud de empleo.
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
              <span><b>Realiza tus evaluaciones</b></span>
            </p>
            <p>
              Ahí encontrarás las ligas para completar tus evaluaciones en línea.
            </p>
          </div>
        </div>
      </div>
      <div className="div-container-icon-rigth">
        <div className="wrapper-btn-information">
          <RedButton step="3" />
          <div>
            <p>
              <span><b>Prepárate para tus entrevistas</b></span>
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
              <span><b>Documentación</b></span>
            </p>
            <p>
              Si los resultados de tus evaluaciones y entrevista son positivos, 
              tendrás que subir tus documentos en la plataforma.
            </p>
          </div>
        </div>
      </div>
      <div className="div-container-icon-rigth">
        <div className="wrapper-btn-information">
          <RedButton step="5" />
          <div>
            <p>
              <span><b>Examen médico</b></span>
            </p>
            <p>
              Eligirás entre dos sucursales de análisis clínicos para
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
              <span><b>Estudio socioeconómico</b></span>
            </p>
            <p>
              Un investigador de NMP asistirá a tu domicilio para recabar
              información sobre tu situación socioeconómica.
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
            onChange={politicsChecked}
          />
          <label for="politics" className="politics">
          Confirmo que he leído y acepto el Aviso Legal 
          sobre Protección de Datos Personales y los {" "}
            <a href="# " className="a-politics">
            <span>Términos y Condiciones </span>
            </a> {" "} de este concurso.
          </label>
        </div>
        <button className={ `btn-form ${btnClass}`} 
        type="submit"
        onClick={beginBtn}
        >
          COMENZAR
        </button>
      </div>
    </div>
  );
};

export default StepsList;
