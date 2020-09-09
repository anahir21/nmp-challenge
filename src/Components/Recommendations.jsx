import React from "react";
import Button from "../assets/Button";
import "../Styles/Recommendations.css";

const Recommendations = () => {
  return (
    <div className="wrapper-recommendations">
      <p className="p-title-recommentations">
        Recomendaciones para tu siguiente etapa
      </p>
      <p className="p-content-recommendations">
        La siguiente etapa de tu proceso es la <b>Documentación</b>. Deberás
        cargar algunos documentos oficiales en formato PDF para comprobar datos,
        acreditar tu información e <br /> iniciar tu expediente.
      </p>
      <p className="p-content-recommendations">
        Te aconsejamos que consultes los documentos que debes subir, asi, en
        caso de que te falte alguno, podrás comenzar los trámites necesarios
        para ontenerlos y agilizar tu <br /> proceso de postulación.
      </p>
      <p className="p-content-recommendations">
        Consulta los documentos que requieres en nuestra sección de
        <span className="focus-recommendation"> Recomendaciones</span>.
      </p>
      <Button title="RECOMENDACIONES" />
    </div>
  );
};

export default Recommendations;
