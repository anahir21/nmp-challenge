import React from 'react';

import '../Styles/TableRecluter.css'
import '../Styles/RecruiterView.css'

const FilterVacants = (props) => {
  const filterDataVacant = (vacant) => {
    console.log(props.allData, 'patito')
    const filterItems = props.allData.filter((item)=> item.vacant === vacant)
    props.setPostulants(filterItems)
    console.log(filterItems, 'datos filtrados');
  }

    return (
      <>
        <select
          className ="btn-selectRecluter"
          type="number"
          onChange={(e) => {
            const valueSetear = e.target.value;
            filterDataVacant(valueSetear);
            console.log(e.target.value,'Soy select')
          }}>
            <option value="" >FILTRAR POR VACANTE</option>
            <option value="BUSSINESS INTELLIGENCE" >BUSSINESS INTELLIGENCE</option>
            <option value="TECNOLOGÍA DE LA INF./SISTEMAS" >TECNOLOGÍA DE LA INF./SISTEMAS</option>
            <option value="ESTRATEGÍA COMERCIAL" >ESTRATEGÍA COMERCIAL</option>
            <option value="OPERACIÓN PRENDARIA" >OPERACIÓN PRENDARIA</option>
            <option value="SERVICIOS GENERALES" >SERVICIOS GENERALES</option>
            <option value="CONTROL PRESUPUESTAL" >CONTROL PRESUPUESTAL</option>
            <option value="AUDITORÍA" >AUDITORÍA</option>
            <option value="PRODUCTOS" >PRODUCTOS</option>
            <option value="PLANEACIÓN FINANCIERA" >PLANEACIÓN FINANCIERA</option>
          </select>
        
      </>
    )
};


  export default FilterVacants;




  // const mapFilter = filtData.map(() => (candidate => {
    //     // eslint-disable-next-line no-unused-expressions
    //     <tr key={candidate.id}>
    //       <td key={candidate}><img alt="favorites" src={myFav ? JewelNoFav : JewelFav} className="favorites" id="addFavorite" onChange={(e) => {setMyFav(e.target.value)}} onClick={changeImage}/>
    //       </td>
    //       <td key={candidate}>{candidate.vacant}</td>
    //       <td key={candidate}>{candidate.name}</td>
    //       <td key={candidate}>{candidate.email}</td>
    //       <td key={candidate}>{candidate.phone}</td>
    //       <td key={candidate}>{candidate.cv}</td>
    //       <td key={candidate}>{candidate.status}</td>
    //       <td key={candidate}>
    //         <button className="MyButton" onClick={()=>openModal(ModalInfoPostulant)}>ACTUALIZAR ESTADO</button>
    //       </td>
    //   </tr>
    // }))