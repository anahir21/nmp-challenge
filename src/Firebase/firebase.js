import firebase from 'firebase'

const config = process.env.REACT_APP_FIREBASE_CONFIG;
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;