import React, {useEffect} from 'react'
import firebase from '../Firebase/firebase'
import { useHistory } from "react-router-dom";

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
      Welcome to our app 
      <input type='button' 
        id='' 
        value='Ingresar'
        onClick={enterBtn} 
      />
    </div>
  )
}

export default Welcome;
