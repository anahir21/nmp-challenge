import React from 'react'
import firebase from '../Firebase/firebase'
import '../Styles/onboarding.css'
import nmp from "../Static/Images/nmp.png";
import { useHistory } from "react-router-dom";

const ShortHeader = () => {
  
  const history = useHistory(); 

  const closeSessionBtn = () => {
    firebase.auth().signOut()
    .then(function() {
      history.push('/')
    }).catch(function(error) {
      console.log(error);
    });
  }
  
  
  return (
    <div className="shortHeader-container">
      <img alt="nmp-img" src={nmp} className="nmp-img" />
      <div className="btns-container">
        <input type='button' 
          id=''
          className='rec-btn' 
          value='RECOMENDACIONES'
          
        />
        <input type='button' 
          id=''
          className='close-btn' 
          value='CERRAR SESIÓN'
          onClick={closeSessionBtn} 
        />
      </div>
    
    </div>
  )
}

export default ShortHeader;
