import React, {useEffect, useState} from 'react'
import firebase from '../Firebase/firebase'
import 'firebase/firestore'
import { useHistory } from "react-router-dom";
import ShortHeader from '../Components/ShortHeader'
import SmallFooter from '../Components/SmallFooter'
import WelcomeUser from '../Components/WelcomeUser';
import Recruiter from '../Components/Recruiter';

const db = firebase.firestore();

const UserProfile = () => {
  const history = useHistory(); 
  const [user, setUser] = useState({})
  const [recruiter, setRecruiter] = useState({})
  
  
  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user != null) {
        console.log(user.uid);
        
        db.collection("users").where("UID", "==", user.uid).get()
        .then((querySnapshot)=> {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setUser(doc.data())
            db.collection("recruiters").where("id", "==", doc.data().recruiterID).get()
            .then((querySnapshot)=> {
              querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                setRecruiter(doc.data())
              })
            })      
          });
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        }); 
    }
	}, [])


  const closeSessionBtn = () => {
    firebase.auth().signOut()
    .then(function() {
      history.push('/')
    }).catch(function(error) {
      console.log(error);
    });
  }
    
  return (
    <div className='profile-container'>
    <ShortHeader />
      <div className='welcome-user'>
        <WelcomeUser 
          user={user}
        />
        <div>
          <Recruiter 
            recruiter={recruiter}
          />
        </div>
      </div>
    
      <input type='button' 
          id='loginBtn' 
          value='Cerrar Sesión' 
          onClick={closeSessionBtn}
          
        />
    <SmallFooter />  
    </div>
  )
}

export default UserProfile;