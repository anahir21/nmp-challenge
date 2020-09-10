import React from 'react'
import firebase from '../Firebase/firebase'
import { useHistory } from "react-router-dom";
import Progress from "../Components/Progress";
import Recommendations from "../Components/Recommendations";
import FirstStep from "../Components/FirstStep";

const UserProfile = () => {
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
    <div>
    Bienvenido a tu sesión: 
      <input type='button' 
          id='loginBtn' 
          value='Cerrar Sesión' 
          onClick={closeSessionBtn}
        />
        <Progress />
        <FirstStep />
        <Recommendations />
      
    </div>
  )
}

export default UserProfile;