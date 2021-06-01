import React from 'react'
import '../Styles/TableRecluter.css'
import Candidates from './Candidates';

const UserTable = () => {

  return(
    <table className='tableStyle'>
      <thead>
        <tr>
          <th></th>
          <th>VACANTE</th>
          <th>NOMBRE</th>
          <th>CORREO</th>
          <th>TELÉFONO</th>
          <th>LINK CV</th>
          <th>STATUS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <Candidates />
      </tbody>
    </table>
    
)
}

export default UserTable