import React, { useState } from "react";
import ReactDOM from "react-dom";
import closeimg from "../Static/Images/close.png";
import "../Styles/Modal.css";

import recruiter from "../Static/Images/recruiter.png";

const modalContainer = document.querySelector("#modalContainer");

export default ({ title, children, isOpened, onClose }) =>
  isOpened
    ? ReactDOM.createPortal(
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-wrapper-content">
                <div className="wrapper-img-recruiter-name">
                  <img
                    alt="recruiter"
                    src={recruiter}
                    className="img-recruiter"
                  />
                  <div className="wrapper-recruitername-position">
                    <p className="p-recruiter-full-name">Alexander Domínguez</p>
                    <p>Analista de Atracción de Talento</p>
                  </div>
                </div>
                <div className="wrapper-recruiter-information">
                  <p className="p-recruiter-title">¡Hola, soy Alexander!</p>
                  <p className="p-recruiter-details">
                    Me considero una persona alegre, entusiasta y analítica, con
                    gran <br /> interés en el desarrollo de las personas y su
                    talento. <br />
                    <br />
                    <b>Trabajo en Nacional Monte de Piedad</b>, por ser una
                    empresa muy <br /> humana, con la noble labor de ayudar a
                    quien más lo necesita. <br /> <br />
                    Mi labor consiste en buscar, identificar y potencializar el
                    talento <br /> de las personas. <br /> <br />
                    <b>Hobbies</b>: Me encanta el mundo del automovilismo (soy
                    fan de la <br /> Fórmula 1 y la Fórmula E). Practico fútbol,
                    natación y yoga.
                  </p>
                </div>
                <div className="container-btn-img-close">
                  <button onClick={onClose} className="btn-close">
                    <img alt="close" src={closeimg} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        modalContainer
      )
    : null;