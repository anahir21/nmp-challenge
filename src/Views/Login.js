import React, {useState} from 'react'
import '../Styles/login.css'
import Logo from '../images/nmp.png'
import firebase from '../Firebase/firebase'
import 'firebase/firestore'
import { useHistory } from "react-router-dom";

const Login = () => {
  
  const history = useHistory(); 
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const loginBtn = () => {
    
    if(email && password){
      console.log('Hey', email, password);
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(()=>{
        history.push('/profile')
      })
      .catch(function(error) {
        console.log(error);
      });
    }else{
      console.log('No hay valores')
    }
    
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
            onChange={(e)=>setEmail(e.target.value)}  
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
