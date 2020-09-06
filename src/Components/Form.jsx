import React from 'react';
// import uuid from 'uuid/v4'

import '../Styles/Form.css'

const Form = ({}) => {
  return(
    <div className="form-postulation">
      <h3>Formulario de Postulación</h3>
      <p>Para postular es necesario que tengas un correo electrónico y un teléfono celular</p>
      <form className="customer-form">
        <label>Nombre(s)</label>
        <input
          className="input-text"
          type="text"
          name="name"
        />
        <label>Apellidos</label>
        <input 
          className="input-text"
          type="text"
          name="lastname"
        />
        <label>Fecha de nacimiento</label>
        <input 
          className="input-date"
          type="date"
          name="date"
        />
        <label>Correo electrónico</label>
        <input 
          className="input-email"
          type="email"
          name="email"
        />
        <label>Teléfono celular</label>
        <input 
          className="input-text"
          type="text"
          name="numberphone"
        />

        <div>
          <input 
            type="checkbox" 
            id="politics"
            name="politics"
            value="politics"
          />
          <label for="politics">He leído y estoy de acuerdo con la política de privacidad de Nacional Monte de Piedad</label>
        </div>
        <div>
          <button
            className="btn-form"
            type="submit"
          >
            Enviar formulario
          </button>
        </div>
      </form>
    </div>
  )
};

export default Form;