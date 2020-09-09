import React, {useState, useEffect, Fragment} from 'react';
import { BrowserRouter, Switch, Route , NavLink} from "react-router-dom"; 
import Login from './Views/Login'
import UserProfile from './Views/UserProfile'
import Welcome from './Views/Welcome'
import firebase from './Firebase/firebase'
import { ToastProvider } from 'react-toast-notifications'


console.log(process.env.REACT_APP_FIREBASE_API_KEY);
console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
console.log(process.env.REACT_APP_FIREBASE_DATABASE_URL);
console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID);
console.log(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET);
console.log(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID);
console.log(process.env.REACT_APP_FIREBASE_APP_ID);
console.log(process.env.REACT_APP_PRUEBA);

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
    <ToastProvider>
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
    </ToastProvider>
  );
}

export default App;