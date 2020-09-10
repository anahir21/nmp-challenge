import React, { useState } from "react";
import ReactDOM from "react-dom";
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
                  <div>
                    <p>hola</p>
                    <p>otro</p>
                  </div>
                </div>
                <div className="wrapper-recruiter-information">
                  <p className="p-recruiter-title">¡Hola, soy Alexander!</p>
                  <p>
                    Me considero una persona alegre, entusiasta y analítica, con
                    gran <br /> interés en el desarrollo de las personas y su
                    talento. <br />
                    <br />
                    Trabajo en Nacional Monte de Piedad, por ser una empresa muy{" "}
                    <br /> humana, con la noble labor de ayudar a quien más lo
                    necesita. <br /> <br />
                    Mi labor consiste en buscar, identificar y potencializar el
                    talento <br /> de las personas. <br /> <br />
                    Hobbies: Me encanta el mundo del automovilismo (soy fan de
                    la <br /> Fórmula 1 y la Fórmula E). Practico fútbol,
                    natación y yoga.
                  </p>
                </div>
                <div>
                  <button onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
              {/* <div className="modal-body">{children}</div> */}
            </div>
          </div>
        </div>,
        modalContainer
      )
    : null;
