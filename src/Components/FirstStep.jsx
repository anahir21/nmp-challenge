import React from "react";
import RedButton from "../assets/RedButton";
import ShortButton from "../assets/ShortButton";
import "../Styles/FirstStep.css";

const FirstStep = () => {
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
        <img alt="alt" src="https://i.postimg.cc/1zWsHjnL/uploadcv.jpg" />
        <img alt="alt" src="https://i.postimg.cc/Y0rNHjq4/uploloadempleo.png" />
      </div>
      <div>
        <p className="p-first-step-recommendation">
          Antes de continuar, te aconsejamos que leas las{" "}
          <span>
            <b>Recomendaciones</b>
          </span>{" "}
          sobre esta etapa.
        </p>
        <ShortButton title="ENVIAR" />
      </div>
    </div>
  );
};

export default FirstStep;
