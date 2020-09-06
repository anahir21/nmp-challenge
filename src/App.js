import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import dotenv from 'dotenv' 
// import { loadReCaptcha } from 'react-recaptcha-v3'
import Login from './Views/Login'
import UserProfile from './Views/UserProfile'
import Welcome from './Views/Welcome'

//dotenv.config()
console.log('CONFIG', process.env.REACT_APP_FIREBASE_CONFIG)

function App() {
  useEffect(() => {
    // loadReCaptcha(your_site_key);
  }, [])
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={UserProfile} />
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
