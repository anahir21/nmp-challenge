import React, {useEffect} from 'react'
import firebase from '../Firebase/firebase'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Header from '../Components/Header';
import SignInBtn from '../Components/SignInBtn';
import Form from '../Components/Form';
import OnboardingText from '../Components/OnboardingText';


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
      <SignInBtn 
        onClickFunction={enterBtn}
      />
      <OnboardingText />
      <Form />
    </div>
  )
}

export default Welcome;