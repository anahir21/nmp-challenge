import React, {useEffect} from 'react'
import firebase from '../Firebase/firebase'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Header from '../Components/Header';
import Form from '../Components/Form';
import StepsList from '../Components/StepsList';

const Welcome = ({isLogin}) => {
  const history = useHistory(); 

  const enterBtn = () => {
    console.log(isLogin);
    if(isLogin){
      history.push('/profile');
    }else{
      history.push('/login');
    }
  }

  return (
    <div>
      <Header />
      <input type='button' 
        id='' 
        value='Ingresar'
        onClick={enterBtn} 
      />
      <Form />
      <StepsList />
    </div>
  )
}

export default Welcome;