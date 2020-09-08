import React, {useState, useEffect, Fragment} from 'react';
import { BrowserRouter, Switch, Route , NavLink} from "react-router-dom"; 
import Login from './Views/Login'
import UserProfile from './Views/UserProfile'
import Welcome from './Views/Welcome'
import firebase from './Firebase/firebase'

function App() {

  const[isLogin, setIsLogin] = useState(false)
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setIsLogin(true);
        console.log('user')
      } else {
        setIsLogin(false);
        console.log('no user')
      }
    });
  });

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {isLogin === true ?
            <Fragment>
              <Route exact path="/" render = {() => 
                <Welcome 
                isLogin={isLogin} 
                />}  
              />
              <Route exact path="/profile" component={UserProfile} />
            </Fragment>
          :
            <Fragment>
              <Route exact path="/" component={Login} />        
            </Fragment>
          }          
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;