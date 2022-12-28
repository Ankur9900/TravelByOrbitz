import React, { useState } from "react";

import {
 
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

 import {auth} from "../firebase/fireconfig"
import { useEffect } from "react";


export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [userName,setUserName] = useState('')
  const [user_Auth,set_Auth]=useState({
    user_Auth:false,
    token:null
  });
  const userLogin=(token)=>{
    set_Auth({user_Auth:true,token:token});

  }
  function logOut() {
    setUserName('')
    return signOut(auth);
  }
 
  

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function facebookSignIn() {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  }
  
  function setUpCaptcha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth,number,recaptchaVerifier)
  }



  return (
    <AuthContext.Provider
      value={{ user, logOut, googleSignIn, facebookSignIn,user_Auth,userLogin,setUpCaptcha,setUserName,userName}}
    >
      {children}
    </AuthContext.Provider>
  );
}
