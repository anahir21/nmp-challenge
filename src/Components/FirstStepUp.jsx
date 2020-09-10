import React, { useState, useEffect } from "react";
import RedButton from "../assets/RedButton";
import Status from '../assets/Status'
import "../Styles/FirstStep.css";


const FirstStepUp = () => {
 
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
        status='review'
        title='Estatus del proceso'
        descrip='En revisión'
      />

    </div>
  );
};

export default FirstStepUp;