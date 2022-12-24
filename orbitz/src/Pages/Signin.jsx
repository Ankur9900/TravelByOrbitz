import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate ,useNavigate } from 'react-router-dom'
import { signin_attemp } from '../Redux/Auth/action'
import styles from './Signin.module.css'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import {Icon} from "react-icons-kit"
import {FcGoogle} from "react-icons/fc";
import {auth} from "./firebase/fireconfig"
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {
  // const auth = useSelector(state => state.Auth.auth);

 const [email, Setemail] = useState("")
 const [password, Setpassword] = useState("")
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const initialState = { email: '', password: "" }

  const [loginData, setLoginData] = useState(initialState)
  const [icon , setIcon]=useState(eyeOff)
  const [pass, setPass]= useState(false);


  const handleToggle=()=>{
    if(pass===false){
      setIcon(eye);
      setPass(true)
    }else{
      setIcon(eyeOff);
      setPass(false)
    }
  }
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
    
    // navigate("/")
  }

  
  // if (auth) {
  //   return <Navigate to='/' />
  // }

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
          {/* <input type="email" name="email" placeholder='Email address' onChange={e => { setLoginData({ ...loginData, [e.target.name]: e.target.value }) }} /> */}
          {/* <input type={pass? "text":"password"} name="password" placeholder="Password" onChange={e => { setLoginData({ ...loginData, [e.target.name]: e.target.value }) }} /> */}
          <input type="email" placeholder='email'
          value={email} onChange={(e)=> Setemail(e.target.value) }
           />
          <input type="password" placeholder='password'
          value={password}
           onChange={(e)=> Setpassword(e.target.value) }
           />
          <span className={styles.togg} onClick={handleToggle}><Icon border="1px solid red" icon ={icon} size={25}/></span>
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
          //  disabled={
          //   loginData.email && loginData.password
          //     ? false
          //     : true
          // }
           className={styles.button} type="submit">Continue</button>
           {/* <button type="submit">Submit</button> */}
          {/* <Link to='/forget'>Forgot Password</Link> */}
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