//import dotenv from 'dotenv' 

import React from 'react';
import { BrowserRouter, Switch, Route , NavLink} from "react-router-dom"; 
import Login from './Views/Login'
import UserProfile from './Views/UserProfile'
import Welcome from './Views/Welcome'
//dotenv.config() 
//require('dotenv').config();

console.log(process.env.REACT_APP_FIREBASE_CONFIG) 

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <NavLink  to='/'>
            <input type="button" value='Home'/>
          </NavLink>
          <NavLink  to='/login'>
            <input type="button" value='Login'/>
          </NavLink>
          <NavLink  to='/profile'>
            <input type="button" value='Profile'/>
          </NavLink>
        </nav>
      
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={UserProfile} />
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
