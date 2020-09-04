import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCRsfT2K4Nk2lHLc-gZPioEG1tXRdCeZgM",
    authDomain: "nmp-rec.firebaseapp.com",
    databaseURL: "https://nmp-rec.firebaseio.com",
    projectId: "nmp-rec",
    storageBucket: "nmp-rec.appspot.com",
    messagingSenderId: "513255208066",
    appId: "1:513255208066:web:6b16ee35de6ead4281f09b"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;