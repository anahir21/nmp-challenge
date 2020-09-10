import React, {useEffect, useState} from 'react'
import firebase from '../Firebase/firebase'
import 'firebase/firestore'
import ShortHeader from '../Components/ShortHeader'
import SmallFooter from '../Components/SmallFooter'
import WelcomeUser from '../Components/WelcomeUser';
import Recruiter from '../Components/Recruiter';
import Progress from "../Components/Progress";
import Recommendations from "../Components/Recommendations";
import FirstStep from "../Components/FirstStep";
import Folder from '../Components/Folder'
import FirstStepUp from '../Components/FirstStepUp'
import '../Styles/profile.css'

const db = firebase.firestore();

const UserProfile = () => {
  const [user, setUser] = useState({})
  const [recruiter, setRecruiter] = useState({})
  const [areFilesUp, setAreFilesUp] = useState(false);
  const [testStatus, setTestStatus] = useState('review')
  
  const renderStepOne = () => {
    if(areFilesUp){
      return <FirstStepUp 
              user={user}
              testStatus={testStatus} 
              setTestStatus={setTestStatus}
            />
    }else{
      return <FirstStep 
              setAreFilesUp={setAreFilesUp}
            /> 
    }
  }

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
      <div className='welcome-user'>
        <WelcomeUser 
          user={user}
        />
        <p className="folder-title">Próximas citas</p>
        <div className='folder-recruiter'>
          <Folder/>
          <Recruiter 
            recruiter={recruiter}
          />
        </div>
      </div>
      <Progress 
        testStatus={testStatus}
      />
      {renderStepOne()}
      
      <Recommendations />
      <SmallFooter />    
    </div>
  )
}

export default UserProfile;