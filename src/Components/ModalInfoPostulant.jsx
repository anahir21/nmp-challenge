import { useDialog } from "react-st-modal";
import React from "react";
import './ModalInfoPostulant.css';
import ImgIterview from "../Static/Images/icon2-computer-c.png";

function ModalInfoPostulant() {
	const dialog = useDialog();
	return (
		<div className="ip-modal-container">
			<div className="ip-info-postulant">
				<div className="ip-vacant-title">Especialista de relaciones laborales</div>
				<div className="ip-info-text">
					<p>Ana Martínez</p>
					<p>Email: anamarhotmail.com</p>
					<p>Teléfono: 55 50 20 25 02</p>
				<a className="ip-linkCV">LINK ANA CV</a>
				</div>
			</div>
			<div className="ip-modal-process">
				<div className="ip-info-process">
					<img className="ip-imgProcess" src={ImgIterview} />
					<div>Entevista</div>
				</div>
				<div className="ip-buttons-container">
					<button className="ip-modal-button">AGENDAR ENTREVISTA</button>
					<button className="ip-modal-button">FINALIZAR PROCESO</button>
				</div>
			</div>
		</div>
	);
}

export default ModalInfoPostulant;