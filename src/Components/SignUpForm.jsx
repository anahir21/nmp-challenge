import React, { useState } from "react";
import "../Styles/signUpform.css";
import firebase from "../Firebase/firebase";
import "firebase/firestore";
import { useHistory } from "react-router-dom";
import loginBack from "../Static/Images/login-back.png";
import ReCaptchaComponent from "./ReCaptcha";
import { useToasts } from "react-toast-notifications";
import openModal from '../Components/ModalFunction';
import ModalPrivacy from '../Components/ModalPrivacy';

// const initialInputs = {
//     email:'',
//     password:'',

// }

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [rfc, setRfc] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
//   const [email, setEmail] = useState(initialInputs);
//   const [password, setPassword] = useState(initialInputs); 
  const [passwordConfirmed, setPasswordConfirmed] = useState(''); 
  const [privacy, setPrivacy] = useState("");
  const history = useHistory();
  const [isError, setIsError] =useState("");

const passwordChecked = (e) => {
    setPasswordConfirmed(e.target.value);
    if (password != passwordConfirmed) {
        setIsError("Please confirm your password");
    } else {
        setIsError("");
    
}
     const info = async (e) =>{
        e.preventDefault();
        if (isVerified && name && email && password && passwordConfirmed && privacy && phone && rfc){
            const auth = firebase.auth();
            auth.createUserWithEmailAndPassword(email, password)
               .then(()=>{
                   console.log('registrado')
                   history.pushState('./')
               })
               .catch(()=>{
                    console.log('no registrado :c')
                    // console.log(error);
                    addToast("Lo siento, no hay un pre registro", {
                        autoDismiss: true,
                        placement: "top-right",
                        appearance: "error",
                     })
               })
        } else {
            addToast(
                "Ingresa tu correo y contraseña, y muéstranos que no eres un robot",
                {
                  autoDismiss: true,
                  placement: "top-right",
                  appearance: "warning",
                }
              );
        }

// const info = async (e) =>{
//     e.preventDefault();

//     if (isVerified && name && email && password && passwordConfirmed && privacy && phone && rfc){
//         const auth = firebase.auth();
//         auth.createUserWithEmailAndPassword(email, password)
//            .then(()=>{
//                 const psw = document.getElementById('loginPsw').value
//                 const pswC = document.getElementById('loginPsw').value
//                 if (psw !== pswC) {
//                     console.log('Las contraseñas no coinciden')
//                     // console.log(error);
//                     addToast("Lo siento, las contraseñas no coinciden", {
//                         autoDismiss: true,
//                         placement: "top-right",
//                         appearance: "error",
//                     })
//                 }else{
//                     console.log('registrado')
//                 history.pushState('./')
//                 }
                
//            })
//            .catch(()=>{
//                 console.log('no registrado :c')
//                 // console.log(error);
//                 addToast("Lo siento, no hay un pre registro", {
//                     autoDismiss: true,
//                     placement: "top-right",
//                     appearance: "error",
//                  })
//            })
//     } else {
//         addToast(
//             "Ingresa tu correo y contraseña, y muéstranos que no eres un robot",
//             {
//               autoDismiss: true,
//               placement: "top-right",
//               appearance: "warning",
//             }
//           );
//     }
    
    // const info = async (e) =>{
    //     e.preventDefault();
    //     const psw = document.getElementById('loginPsw').value
    //     const pswC = document.getElementById('loginPsw').value
    //     if (psw !== pswC) {
    //         console.log('Las contraseñas no coinciden')
    //         // console.log(error);
    //         addToast("Lo siento, las contraseñas no coinciden", {
    //             autoDismiss: true,
    //             placement: "top-right",
    //             appearance: "error",
    //          })
    //     }else if (isVerified && name && email && password && passwordConfirmed && privacy && phone && rfc){
    //         const auth = firebase.auth();
    //         auth.createUserWithEmailAndPassword(email, password)
    //            .then(()=>{
    //                console.log('registrado')
    //                history.pushState('./')
    //            })
    //            .catch(()=>{
    //                 console.log('no registrado :c')
    //                 // console.log(error);
    //                 addToast("Lo siento, no hay un pre registro", {
    //                     autoDismiss: true,
    //                     placement: "top-right",
    //                     appearance: "error",
    //                  })
    //            })
    //     } else {
    //         addToast(
    //             "Ingresa tu correo y contraseña, y muéstranos que no eres un robot",
    //             {
    //               autoDismiss: true,
    //               placement: "top-right",
    //               appearance: "warning",
    //             }
    //           );
    //     }
        


 const db = firebase.firestore();
 db.collection("candidates").doc().set({name, rfc, phone, email})
    
}

const [isVerified, setIsVerified] = useState(false);
const { addToast } = useToasts();


const privacyModal = () => {
  openModal(ModalPrivacy);
}

return (
  <div className="signUp-container">
    <img className="signUpbackImg" src={loginBack} alt="signUpbackImg" />

    <form className="signUp-form-container">
      <p>Registro de Postulantes</p>

      <div id="signUp-form-container-w">
        <div className="formLR">
          <div className="labelInputSgngUp">
            <label className="namee" for="signUpName">
              Nombre
            </label>
            <input
              type="text"
              id="signUpName"
            //   name="nombre"            
              placeholder= "Nombre completo" 
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="labelInputSgngUp">
            <label for="RFC">RFC</label>
            <input
              type="text"
              id="signUpRFC"
            //   rfc=""
              placeholder= "RFC"
              onChange={(e) => setRfc(e.target.value)}
            />
          </div>
          <div className="labelInputSgngUp">
            <label for="Telefono">Telefono</label>
            <input
              type="text"
              id="signUpnumber"
            //   phone=""
              placeholder= "Teléfono (10 dígitos)"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="formLR">
          <div className="labelInputSgngUp">
            <label for="loginUser">Correo electrónico</label>
            <input
              type="email"
              id="singUpUser"
            //   email=""
              placeholder= "Correo electrónico"
              //value={email.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="labelInputSgngUp">
            <label for="loginPsw">Contraseña</label>
            <input
              type="password"
              id="loginPsw"
            //   password=""
              value={password}
              placeholder= "Crea una contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="labelInputSgngUp">
            <label for="loginPswConfirmed">Confirma tu Contraseña</label>
            <input 
            type="password"
            // passwordConfirmed=""
            id="loginPswConfirmed"
            value ={passwordConfirmed} 
            placeholder= "Confirma tu contraseña"
            onChange={(e) => passwordChecked(e)}
           
            />
            <span>{isError}</span>
          </div>
          {/* if (loginPsw.value !=== loginPswConfirmed.value) {
                            <label> No coinciden las contraseñas</label>
                        }
                        */}
        </div>
      </div>
      <div className="AvisoDePrivacidad">
          <input
            type="checkbox"
            className="checkbox-politics"
            id="politics"
            value="true"
            // privacy=""
            onChange={(e) => setPrivacy(e.target.value)}
          />
          <label for="politics" className="politics">
            Acepto el Aviso Legal sobre Protección de Datos Personales y los{" "}
            <a
              target="_blanck"
              // href="https://www.montepiedad.com.mx/legales-aviso-de-privacidad-empleo"
              className="a-politics"
              onClick={privacyModal}
            >
              <span>Términos y Condiciones </span>
            </a>{" "}
            de este concurso.
          </label>
        </div>


      <ReCaptchaComponent
        isVerified={isVerified}
        setIsVerified={setIsVerified}
      />

      <input
        type="submit"
        className={
          isVerified && name && email && password && passwordConfirmed && privacy && phone && rfc  ? "btn-enabled" : "btn-disabled"
        }
        id="loginBtn"
        value="INGRESAR"
        onClick={info}
      />
      <div className="AvisoDePrivacidad"></div>
    </form>
  </div>
);
};


}
export default SignUpForm;
