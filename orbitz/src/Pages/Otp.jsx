import React from 'react'
import styles from './Otp.module.css'
import Navbar from '../Components/Navbar/Navbar'

import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

const Otp = () => {
  const navigate = useNavigate()
  return (
    <div style={{ display: 'flex', flexDirection: "column" }}>
      <Navbar />
      <div className={styles.otpcontainer}>
        <div className={styles.mainOTp}>
          <h2 className={styles.innerOTP}>Enter verification code</h2>

          <div className={styles.inpDiv}>
            <input type="text" name="" className={styles.otpinp} />
            <input type="text" name="" className={styles.otpinp} />
            <input type="text" name="" className={styles.otpinp} />
            <input type="text" name="" className={styles.otpinp} />
          </div>
          <div className={styles.btnOTPdiv}>
            <button onClick={() => {
              navigate('/thanks')
            }} className={styles.otpbtn}>Confirm Otp</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Otp