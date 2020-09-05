import React, {useState} from 'react'
import '../Styles/login.css'
import Logo from '../images/nmp.png' 

const Login = () => {

  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  function loginBtn(){
    console.log('Hey', username, password);
  }

  return (
    <div className='login-container'>
      <img src={Logo} alt='nmp-logo'/>
      <div className='login-form-container'>
        <div> 
          <label for='loginUser'>
            Correo electrónico
          </label>
          <input type='text' 
            id='loginUser' 
            name='' 
            onChange={(e)=>setUsername(e.target.value)}  
          />
        </div>
        <div>
          <label for='loginPsw'>
            Contraseña
          </label>
          <input type='password' 
            id='loginPsw' 
            name='' 
            onChange={(e)=>setPassword(e.target.value)}  
          />
        </div>
              
        <input type='button' 
          id='loginBtn' 
          value='Ingresar' 
          onClick={loginBtn}
        />          
      </div>
    </div>
  )
}

export default Login;
