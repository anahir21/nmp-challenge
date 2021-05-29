import React, {useEffect, useState}  from 'react'
import ShortHeader from '../Components/ShortHeader';
import SmallFooter from '../Components/SmallFooter';
// import WelcomeUser from '../Components/WelcomeUser';
import firebase from '../Firebase/firebase'
import 'firebase/firestore'
import '../Styles/profile.css'

const db = firebase.firestore();

const Recruiters = () => {
  const [user, setUser] = useState({});
  const [recruiter, setRecruiter] = useState({})
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

  return (
    <div className='profile-container'>
      <ShortHeader />
      {/* <div className='welcome-user'>
        <WelcomeUser 
          user={user}
        />
      </div>       */}
      <div>
        
      </div>
      <SmallFooter />   
    </div> 
  
  )
}

export default Recruiters;