import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import Login from './Views/Login'
import UserProfile from './Views/UserProfile'
import Welcome from './Views/Welcome'

console.log('config', process.env.config) 

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
