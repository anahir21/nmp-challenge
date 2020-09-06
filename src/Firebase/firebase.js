import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCI8qFGz291cnQczBAAzWCRbCB1XBU06EM",
  authDomain: "nmp-dev-fab.firebaseapp.com",
  databaseURL: "https://nmp-dev-fab.firebaseio.com",
  projectId: "nmp-dev-fab",
  storageBucket: "nmp-dev-fab.appspot.com",
  messagingSenderId: "398792109990",
  appId: "1:398792109990:web:489731574b3a6944a72967"
};

firebase.initializeApp(firebaseConfig);

export default firebase;