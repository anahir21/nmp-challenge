import React, { useState} from 'react';
import JewelNoFav from "../assets/JoyaGray.png";
import JewelFav from "../assets/Joya.png";
import openModal from './ModalFunction';
import ModalInfoPostulant from './ModalInfoPostulant';
//import firebase from '../Firebase/firebase'
//import {usePagination} from "use-pagination-firestore";

import '../Styles/TableRecluter.css'

const Candidates = (props) => {

//   const {
//     items,
//     isLoading,
//     isStart,
//     isEnd,
//     getPrev,
//     getNext,
// } = usePagination<Candidate>(
//     firebase
//         .firestore()
//         .collection("candidates")
//         .orderBy("state"),
//     {
//         limit: 10
//     }
// );

// if (isLoading) {
//     return <h1>Cargando...</h1>;
// }
    
  // const db = firebase.firestore().collection('candidates');
  const [myFav, setMyFav] = useState(true);
  // const [postulants, setPostulants] = useState([]);

  const changeImage = () => {
   
    setMyFav(!myFav)
  } 

//   const datas = () => {db.onSnapshot((querySnapshot)=> {
//     const docs = [];
//     querySnapshot.forEach(async(doc) => {
//        docs.push({ ...doc.data() });
//     })
//     setPostulants(docs);
//     console.log(docs, 'datos');
//   })
// }

//   useEffect(() =>{
//     datas();
//   }, []);

    // console.log(datas, 'soy data miri')
    return (
      <>
        { 
          props.postulants.map((candidate) => (
                <tr key={candidate.id}>
                  <td key={candidate}><img alt="favorites" src={myFav ? JewelNoFav : JewelFav} className="favorites" id="addFavorite" onClick={changeImage}/>
                  </td>
                  <td key={candidate}>{candidate.vacant}</td>
                  <td key={candidate}>{candidate.name}</td>
                  <td key={candidate}>{candidate.email}</td>
                  <td key={candidate}>{candidate.phone}</td>
                  <td key={candidate}>{candidate.cv}</td>
                  <td key={candidate}>{candidate.status}</td>
                  <td key={candidate}>
                  <button className="MyButton" onClick={()=>openModal(ModalInfoPostulant)}>ACTUALIZAR ESTADO</button>
                  </td>
              </tr>
            
          
          ))
        }
        
      </>
    )
};

  export default Candidates;