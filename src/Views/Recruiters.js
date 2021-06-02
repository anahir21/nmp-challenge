import React, {useEffect, useState}  from 'react'
import ShortHeader from '../Components/ShortHeader';
import SmallFooter from '../Components/SmallFooter';
import TableRecluter from '../Components/TableRecluter';
import FilterVacants from '../Components/FilterVacants';

import openModal from '../Components/ModalFunction';
import ModalPreSingup from '../Components/ModalPreSignup';

import firebase from '../Firebase/firebase'
import 'firebase/firestore'
import '../Styles/RecruiterView.css'


const db = firebase.firestore();

const Recruiters = () => {
  const [user, setUser] = useState({});
  const [recruiter, setRecruiter] = useState({})
  const [value, setValue] = useState();
  const [postulants, setPostulants] = useState([]);
  const [allData, setAllData] = useState([]);
  

  const datas = () => {db.collection('candidates').onSnapshot((querySnapshot)=> {
    const docs = [];
    querySnapshot.forEach(async(doc) => {
       docs.push({ ...doc.data() });
    })
    setAllData(docs);
    setPostulants(docs);
    })
  }

  useEffect(() =>{
    datas();
  }, []);
  
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
            setUser(doc.data())
            db.collection("recruiters").where("id", "==", doc.data().recruiterID).get()
            .then((querySnapshot)=> {
              querySnapshot.forEach((doc) => {
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


  const registerCandidateBtn = () => {
    openModal(ModalPreSingup);
  }


  return (
    <div className='profile-container'>
      <ShortHeader />
      <div className='displayDataCandidates'>
        <p>
				  ¡Hola, Alexander!
			  </p>
        {/* <div className="mainContainer"> */}
        <div className="buttonsRecruiters">
          <div className="selectsRecluters">
            <select
              className ="btn-selectRecluter"
              type="number"
              onChange={(e) => {
              setValue(e.target.value);
              }}>
              <option value="">FILTRAR POR STATUS</option>
              <option value="EVA">EVALUACIÓN</option>
              <option value="ENT">ENTREVISTAS</option>
              <option value="DOC">DOCUMENTACIÓN</option>
              <option value="EXME">EXAMEN MÉDICO</option>
              <option value="ESOE">ESTUDIO SOCIO-ECONÓMICO</option>
            </select>
            
            <FilterVacants postulants= {postulants} setPostulants = {setPostulants} allData = {allData}/>
            
          </div> 
          <input type='button' 
            id=''
            className='btn-formNewCandidate'
            value='REGISTRAR NUEVO CANDIDATO'
            onClick={registerCandidateBtn} 
          />
          </div>          
          <div className="tableContainer">
            <TableRecluter postulants= {postulants}/>
          </div>
        </div>
       <SmallFooter />   
      </div> 
    
    
  
  )
}

export default Recruiters;