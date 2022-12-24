import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyByNhK0Y6f7SGBCCF-MWH8OJY_0-IT1JrM",
  authDomain: "react-auth-a65ef.firebaseapp.com",
  projectId: "react-auth-a65ef",
  storageBucket: "react-auth-a65ef.appspot.com",
  messagingSenderId: "265628479670",
  appId: "1:265628479670:web:17c0ee1f982295a73b7617",
  measurementId: "G-0WWD7K30NF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth(app)
 
