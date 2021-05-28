import { useDialog } from "react-st-modal";
import React from "react";
import './ModalPreSignup.css'

function ModalPreSingup() {
	const dialog = useDialog();
	return (
		<div className="ps-modalForm-container">
			<div className="ps-titleModal">Registrar Nuevo Candidato</div>
			<form className="ps-form" onSubmit={(e) => {
				e.preventDefault();
				dialog.close();
			}}>
				<div className="sp-input-container">
					<div className="ps-label-inpuForm">Nombre completo</div>
					<input type="text" className="ps-form-input"/>
				</div>
				<div className="sp-input-container">
					<div className="ps-label-inpuForm">Correo electrónico</div>
					<input type="email" className="ps-form-input"/>
				</div>
				<div className="sp-input-container">
					<div className="ps-label-inpuForm">RFC</div>
					<input type="text" className="ps-form-input"/>
				</div>
				<div className="sp-input-container">
					<div className="ps-label-inpuForm">Vacante</div>
					<select name="select" className="ps-form-select">
					<option value="value1">Value 1</option>
					<option value="value2" selected>Value 2</option>
					<option value="value3">Value 3</option>
				</select>
				</div>
				<button className="ps-submit-button">REGISTRAR NUEVO CANDIDATO</button>
			</form>

		</div>
	);
}

export default ModalPreSingup;



