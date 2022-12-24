import React, { useState } from 'react';
import styles from './Signup.module.css';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { signup_attemp } from '../Redux/Auth/action';
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import {Icon} from "react-icons-kit"
import {auth} from "./firebase/fireconfig"
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email,SetEmail]  =useState("")
  const [Password,SetPassword]  =useState("")

  const navigate = useNavigate()
  const [icon , setIcon]=useState(eyeOff)
  const [pass, setPass]= useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,Password)
    .then((userCredential)=>{
      console.log(userCredential)
      alert("Account created sucessfully")
      navigate("/signin")
    }).catch((error)=>{
      console.log(error)
    })
    // Navigate("/signin")
  };

 
  return (
    <div className={styles.signUp_container}>
     
      <div className={styles.logo_back}>
        <Link to="/">
          <img
            className={styles.logo}
            src="https://www.orbitz.com/_dms/interstitial/logo.svg?locale=en_US&siteid=70201"
            alt=""
          
          />
        </Link>
        <hr />
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.signin_div}>
          <h1>Create an account</h1>
          <input
            type="email"
            // name="email"
            placeholder="Enter Email Address"
            value={email}
            required
            onChange={(e)=> SetEmail(e.target.value)}
          />

          <input
            type={"password"}
            // name="password"
            placeholder="Enter Password"
            value={Password}
            required
            onChange={(e) => SetPassword(e.target.value)}
          />
          <span className={styles.togg} ><Icon icon ={icon} size={25}/></span>
          <div className={styles.keep}>
            <input className={styles.checkbox} type="checkbox" />
            Keep me signed in
          </div>

          <p className={styles.term_conditions}>
            By creating an account, I agree to the Orbitz
            <span>Terms and Conditions</span>,<span>Privacy Statement</span> and
            <span> Orbitz Rewards Terms and Conditions</span>.
          </p>
        </div>

        <div className={styles.end_div}>
          <button
            // disabled={
            //   form.name && form.email  && form.password
            //     ? false
            //     : true
            // }
            className={styles.button}
            type={'submit'}
          >
            Continue
          </button>

          <p>
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
          <p>or continue with</p>
          <div className={styles.social_media}>
            <img
              src="https://a.travel-assets.com/egds/marks/apple.svg"
              alt=""
            />
            <img
              src="https://a.travel-assets.com/egds/marks/facebook.svg"
              alt=""
            />
          </div>
        </div>

      </form>
    </div>
  );
  
};

export default SignUp;