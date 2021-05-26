import firebase from 'firebase'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDaqWIFi8i6qpUOMWK5VtEkNkzxupBRpCs",
    authDomain: "nmp-tf-cdmx10.firebaseapp.com",
    projectId: "nmp-tf-cdmx10",
    storageBucket: "nmp-tf-cdmx10.appspot.com",
    messagingSenderId: "982045456860",
    appId: "1:982045456860:web:21ae198e15f1c7eae6b719",
    measurementId: "G-4SRNNMP0WE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

export default firebase;
