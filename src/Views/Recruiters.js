import React, {useEffect, useState}  from 'react'
import ShortHeader from '../Components/ShortHeader';
import SmallFooter from '../Components/SmallFooter';
import TableRecluter from '../Components/TableRecluter';
// import WelcomeUser from '../Components/WelcomeUser';
///Modal
import openModal from '../Components/ModalFunction';
import ModalPreSingup from '../Components/ModalPreSignup';

import firebase from '../Firebase/firebase'
import 'firebase/firestore'
import '../Styles/RecruiterView.css'
import { database } from 'firebase';


const Recruiters = () => {

 
  const db = firebase.firestore();
const candidatesRef = db.collection('candidates');

  const [user, setUser] = useState({});
  const [recruiter, setRecruiter] = useState({})
  const [value, setValue] = useState();
  const [postulants, setPostulants] = useState([]); //MIRI

  const datas = () => {candidatesRef.onSnapshot((querySnapshot)=> {//MIRI
    const docs = [];
    querySnapshot.forEach(async(doc) => {
       docs.push({ ...doc.data() });
    })
    setPostulants(docs);
    console.log(docs, 'datos');
  })
}

  useEffect(() =>{
    datas();
  }, []);//MIRI

  console.log(datas, 'soy data miri')//MIRI

  
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

  const registerCandidateBtn = () => {
    openModal(ModalPreSingup);
  }
  
  let lastDocument = null;
  const NextPage = () => {
    // console.log('Siguiente pag.')
     const query = candidatesRef
                    .orderBy('state')
                    .startAfter( lastDocument )
     query.limit(10).get().then(snap => {
           firstDocument = snap.docs[ 0 ] || null;
           lastDocument = snap.docs[ snap.docs.length -1] || null;
           TableRecluter(snap); 
           console.log('Si llegue')       
     })              
  }
  let firstDocument = null;
  const PrevPage = () => {
    // console.log('Siguiente pag.')
     const query = candidatesRef
                    .orderBy('state')
                    .endBefore( firstDocument )
     query.limit(10).get().then(snap => {
           firstDocument = snap.docs[ 0 ] || null;
           lastDocument = snap.docs[ snap.docs.length -1] || null;
           TableRecluter(snap);    
           console.log('Si llegue 2 ')     
     })              
  }
  // const NextPage = () => {
  //   console.log('Siguiente pag.')
  // }
  // const PrevPage = () => {
  //   console.log('Anterior pag.')
  // }

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
              <option value="SE">CV Y SOLICITUD DE EMPLEO</option>
              <option value="EVA">EVALUACIÓN</option>
              <option value="ENT">ENTREVISTAS</option>
              <option value="DOC">DOCUMENTACIÓN</option>
              <option value="EXME">EXAMEN MÉDICO</option>
              <option value="ESOE">ESTUDIO SOCIO-ECONÓMICO</option>
            </select>
            <select
            className ="btn-selectRecluter"
            type="number"
            onChange={(e) => {
            setValue(e.target.value);
          }}>
            <option value="">FILTRAR POR VACANTE</option>
            <option value="BI">BUSSINESS INTELLIGENCE</option>
            <option value="TI">TECNOLOGÍA DE LA INF./SISTEMAS</option>
            <option value="EC">ESTRATEGÍA COMERCIAL</option>
            <option value="OPP">OPERACIÓN PRENDARIA</option>
            <option value="SEG">SERVICIOS GENERALES</option>
            <option value="CPR">CONTROL PRESUPUESTAL</option>
            <option value="AUD">AUDITORÍA</option>
            <option value="PRD">PRODUCTOS</option>
            <option value="PFI">PLANEACIÓN FINANCIERA</option>
          </select>
          </div> 
          <input type='button' 
            id=''
            className='btn-formNewCandidate'
            value='REGISTRAR NUEVO CANDIDATO'
            onClick={registerCandidateBtn} 
          />
          </div>          
          <div className="tableContainer">
            <TableRecluter postulants = {postulants} />
            <div className="pagination">
              <button className='btn-page' onClick={PrevPage}>Página anterior</button>
              <button className='btn-page' onClick={NextPage}>Siguiente página</button>
            </div>
          </div>
        </div>
       <SmallFooter />   
      </div> 
    
    
  
  )
}

export default Recruiters;