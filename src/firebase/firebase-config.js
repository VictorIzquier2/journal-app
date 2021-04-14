import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDH75ShbI0hhaPJP5uBDxhEimdwozRyyOU",
    authDomain: "react-app-cursos-c803c.firebaseapp.com",
    projectId: "react-app-cursos-c803c",
    storageBucket: "react-app-cursos-c803c.appspot.com",
    messagingSenderId: "727057759952",
    appId: "1:727057759952:web:f32c995da0ad809323e8d5"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{
    db, 
    googleAuthProvider,
    firebase
  }
