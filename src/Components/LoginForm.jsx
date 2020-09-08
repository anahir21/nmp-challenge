import React, {useState} from 'react'
import '../Styles/login.css'
import firebase from '../Firebase/firebase'
import 'firebase/firestore'
import { useHistory } from "react-router-dom";
import loginBack from '../Static/Images/login-back.png'
import ReCaptchaComponent from './ReCaptcha'

const LoginForm = () => {
  
    const history = useHistory(); 
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[captcha, setCaptcha] = useState(false);
  
    const loginBtn = () => {
      
      if(email && password){
        console.log('Hey', email, password);
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
          history.push('/welcome')
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
      <img className='backImg' src={loginBack} alt='backImg'/>
      <div className='login-form-container'>
        <p>
          Bienvenido
        </p>
        
        <div> 
          <label for='loginUser'>
            Ingresa tu correo electrónico
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

        <ReCaptchaComponent />
              
        <input type='button' 
          id='loginBtn' 
          value='Ingresar' 
          onClick={loginBtn}
        />          
      </div>
    </div>
  )
}

export default LoginForm
