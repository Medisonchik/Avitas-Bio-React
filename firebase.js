import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFUe-3uWZbWPBTZTQC6BiDkriJlnWNxFg",
    authDomain: "avitas-bio.firebaseapp.com",
    databaseURL: "https://avitas-bio-default-rtdb.firebaseio.com",
    projectId: "avitas-bio",
    storageBucket: "avitas-bio.appspot.com",
    messagingSenderId: "237948421793",
    appId: "1:237948421793:web:a8f685aa3c3081970352e0",
    measurementId: "G-ZC98JC6D9Q"
  };

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  
  export { app, firestore };