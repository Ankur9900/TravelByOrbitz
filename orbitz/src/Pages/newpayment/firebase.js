 import * as firebase from "firebase" 

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwBFVqdyIFyXCTcnZUi8tSTxOrTU_itEk",
  authDomain: "phone-login-37c41.firebaseapp.com",
  projectId: "phone-login-37c41",
  storageBucket: "phone-login-37c41.appspot.com",
  messagingSenderId: "527634363302",
  appId: "1:527634363302:web:98679c1aefb830b21fd567"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  export default firebase