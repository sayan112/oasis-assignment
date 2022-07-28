// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWVZrwkeR2BWKjTkTTX5L5R3JIehd4LD4",
  authDomain: "heythere-cd806.firebaseapp.com",
  projectId: "heythere-cd806",
  storageBucket: "heythere-cd806.appspot.com",
  messagingSenderId: "15540736844",
  appId: "1:15540736844:web:d806cf1d84078d6ce435e9",
  measurementId: "G-BB6DVQ8HCL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
 export {app,auth} ;
