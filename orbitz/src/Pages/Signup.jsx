import React, { useState } from 'react';
import styles from './Signup.module.css';
import { Link, useNavigate, } from 'react-router-dom';
import { signup_attemp } from '../Redux/AuthReducer/action';
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import {Icon} from "react-icons-kit"

const SignUp = () => {
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const [icon , setIcon]=useState(eyeOff)

  const handleToggle=()=>{
    if(form==='password'){
      setIcon(eye);
      setForm("text")
    }else{
      setIcon(eyeOff);
      setForm('password')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signup_attemp(form, navigate);
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
            name="email"
            placeholder="Email address"
            required
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />

          <input
            type="text"
            name="name"
            placeholder="Full name"
            required
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />

          <input
            type={form}
            name="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value }
                )
            }
          />
          <span className={styles.togg} onClick={handleToggle}><Icon icon ={icon} size={25}/></span>
          <div>
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
            disabled={
              form.name && form.email  && form.password
                ? false
                : true
            }
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