import React, { useState } from "react";

import "../Styles/Form.css";

const Form = ({}) => {
  const [data, setData] = useState({
    name: "",
    lastname: "",
    date: "",
    email: "",
    numbeer: "",
  });

  console.log("Info del aspi", data);

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const { name, lastname, date, email, numbeer } = data;

  const submitData = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      lastname.trim() === "" ||
      date.trim() === "" ||
      email.trim() === "" ||
      numbeer === ""
    ) {
      setError(true);
      return;
    } else {
      setError(false);

      setData({
        name: "",
        lastname: "",
        date: "",
        email: "",
        numbeer: "",
      });
    }
  };

  return (
    <div className="form-postulation">
      <p className="p-form-title">Formulario de postulación</p>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <p className="p-form-postulation-details">
        Para postular es necesario que tengas un correo electrónico y un
        teléfono celular
      </p>
      <form className="customer-form" onSubmit={submitData}>
        <label className="labels-form">Nombre(s)</label>
        <input
          className="input-text"
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
        />
        <label className="labels-form">Apellidos</label>
        <input
          className="input-text"
          type="text"
          name="lastname"
          onChange={handleChange}
          value={lastname}
        />
        <label className="labels-form">Fecha de nacimiento</label>
        <input
          className="input-date"
          type="date"
          name="date"
          onChange={handleChange}
          value={date}
        />
        <label className="labels-form">Correo electrónico</label>
        <input
          className="input-email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <label className="labels-form">Teléfono celular</label>
        <input
          className="input-text"
          type="number"
          name="numbeer"
          onChange={handleChange}
          value={numbeer}
        />
        <div>
          <input
            type="checkbox"
            className="checkbox-politics"
            id="politics"
            name="politics"
            value="politics"
          />
          <label for="politics" className="politics">
            He leído y estoy de acuerdo con el <a href="# " className="a-politics">Aviso de Privacidad Solicitante de Empleo</a> de Nacional Monte de Piedad
          </label>
        </div>
        <div>
          <button className="btn-form" type="submit">
            ENVIAR FORMULARIO
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
