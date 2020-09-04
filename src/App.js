import dotenv from 'dotenv' 

import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import Login from './Views/Login'
import UserProfile from './Views/UserProfile'
import Welcome from './Views/Welcome'
dotenv.config() 
console.log('CONFIG', process.env.CONFIG) 

function App() {
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
