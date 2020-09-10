import React, { useState, useEffect } from "react";
import RedButton from "../assets/RedButton";
import Status from '../assets/Status'
import "../Styles/FirstStep.css";
import nextIcon from '../Static/Images/next.png'


const FirstStepUp = ({testStatus, setTestStatus}) => {

    setTimeout(function(){  
      setTestStatus('done')
    }, 3000);
  
  const btnNext = () => {
    if(testStatus==='review'){
      return null
    }else{
      return  <div className="next-step"> 
                <div>
                  <p>Ir al siguiente paso</p>  
                </div>
                <div>
                  <img alt={nextIcon} src={nextIcon} className=""/>
                </div>
              </div>
    } 
  }
 
  return (
    <div className="wrapper-first-step">
      <p className="p-title-first-step">¡Comencemos!</p>
      <div className="wrapper-red-button-p">
        <RedButton step="1" />
        <p className="p-info-first-step">
          <span>
            <b>CV y solicitud de empleo</b>
          </span>
        </p>
      </div>
      
      <Status 
        status='done'
        title='Tu estatus'
        descrip='Documentos enviados'
      />

      <Status 
        status={testStatus}
        title='Estatus del proceso'
        descrip={testStatus==='review' ? 'En revisión' : 'Verificado'}
      />

      {btnNext()}

    </div>
  );
};

export default FirstStepUp;