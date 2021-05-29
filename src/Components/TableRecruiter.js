import React from 'react'
import '../Styles/TableRecluter.css'
import Joya from "../assets/Joya.png";
const UserTable = () => (
  <table className='tableStyle'>
    <thead>
      <tr>
        <th>Joya</th>
        <th>Vacante</th>
        <th>Nombre</th>
        <th>Correo</th>
        <th>Teléfono</th>
        <th>Link CV</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img alt="nmp-img" src={Joya} className="nmp-img" /></td>
        <td>Especialista de relaciones laborales</td>
        <td>Ana Martínez</td>
        <td>anamat@hotmail.com</td>
        <td>55 50 20 25 02</td>
        <td>LINK ANA C.V.</td>
        <td>EN EVALUACIÓN</td>
        <td>
          <button className="" onClick={console.log('Si sirvo, actualizo')}>ACTUALIZAR ESTADO</button>
        </td>
      </tr>
    </tbody>
  </table>
)
export default UserTable