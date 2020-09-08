import React from 'react'
import '../Styles/onboarding.css'

const SignInBtn = ({onClickFunction}) => {
  return (
    <div className="signInBtn-container">
      <p>
        ¿Ya tienes una cuenta?
      </p>
      <input type='button' 
        id='' 
        value='INGRESAR'
        onClick={onClickFunction} 
      />
    </div>
  )
}

export default SignInBtn;
