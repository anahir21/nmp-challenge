import React, { useState, useEffect } from "react";
import RedButton from "../assets/RedButton";
import ShortButton from "../assets/ShortButton";
import "../Styles/FirstStep.css";
import UploadFile from "./UploadFile";

const FirstStep = ({ setAreFilesUp }) => {

  const [isCV, setIsCV] = useState(false);
  const [isSoli, setIsSoli] = useState(false);
  
  const getFilesUp = () => {
    if(isCV && isSoli){
      setAreFilesUp(true)
      
    }else{
      setAreFilesUp(false)
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
      <p className="p-explanation">
        Carga tu CV y tu solicitud de empleo en formato Word o PDF. <br />
        <br /> Descarga{" "}
        <a href="# " className="a-here-first-step">
          <span>aquí</span>
        </a>{" "}
        el fomato de la solicitud de empleo.
      </p>
      <div className="wrapper-uploads-first-step">
        <UploadFile 
          file='CV'
          setIsFile={setIsCV}
        />
        <UploadFile 
          file='Solicitud de empleo'
          setIsFile={setIsSoli}
        />
        
      </div>
      <div>
        <p className="p-first-step-recommendation">
          Antes de continuar, te aconsejamos que leas las{" "}
          <span>
            <b>Recomendaciones</b>
          </span>{" "}
          sobre esta etapa.
        </p>
        <ShortButton title="ENVIAR" 
         classAble={isCV && isSoli ? 'btn-enable' : 'btn-disabled'}
         onClickFunction={getFilesUp} 
        />
      </div>
    </div>
  );
};

export default FirstStep;
