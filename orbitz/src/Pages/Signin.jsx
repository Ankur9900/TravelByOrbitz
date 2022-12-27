import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import styles from './Signin.module.css'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

import {Icon} from "react-icons-kit"
import {FcGoogle} from "react-icons/fc";
import {auth} from "./firebase/fireconfig"
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {

 const [email, Setemail] = useState("")
 const [password, Setpassword] = useState("")
  const navigate = useNavigate()

  const [icon , setIcon]=useState(eyeOff)



 
  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      console.log(userCredential);
      alert("Signed sucessfully")
      navigate("/")
    }).catch((error) => {
      console.log(error);
    })
    
  }

  

  return (
    
    <div className={styles.signin_container}>

      <div className={styles.logo_back}>
        <Link to="/">
          <img
            className={styles.logo}
            src="https://www.orbitz.com/_dms/interstitial/logo.svg?locale=en_US&siteid=70201"
            alt=""
          
          />
        </Link>
        <hr/>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.signin_div}>
          <h1>Sign in</h1>
             <input type="email" placeholder='email'
          value={email} onChange={(e)=> Setemail(e.target.value) }
           />
          <input type="password" placeholder='password'
          value={password}
           onChange={(e)=> Setpassword(e.target.value) }
           />
          <span className={styles.togg} ><Icon border="1px solid red" icon ={icon} size={25}/></span>
          <div className={styles.sign}>
            <input
              className={styles.checkbox}
              type="checkbox"
            />
            Keep me signed in
          </div>
          <p className={styles.term_conditions}>
            By creating an account, I agree to the Orbitz{' '}
            <span>Terms and Conditions</span>,
            <span>Privacy Statement</span> and{' '}
            <span> Orbitz Rewards Terms and Conditions</span>.
          </p>
        </div>
        <div className={styles.end_div}>
          <button
         
           className={styles.button} type="submit">Continue</button>
        
          <p >
            Don't have an account? <Link to='/signup'>Create one</Link>
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
             
              
             <FcGoogle/>

          </div>
        </div>
      </form>


    </div>
  )
}

export default SignIn