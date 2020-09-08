import React from 'react'
import '../Styles/onboarding.css'
import nmp from "../Static/Images/nmp.png";

const ShortHeader = ({onClickFunction}) => {
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
          onClick={onClickFunction} 
        />
      </div>
    
    </div>
  )
}

export default ShortHeader;
