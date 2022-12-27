
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PaymentPart from '../Components/Payments/Payment'
import HomePage from '../Pages/HomePage'
import Hotel  from "../Pages/Hotels"
import Otp from "../Pages/Otp"
// import Otp from "../Pages/OTP/Otp"
import SignIn from "../Pages/Signin"
import Thanks from "../Pages/Thankyou"
import SignUp from "../Pages/Signup"
// import Hotel from "../Hotel/Hotel"
import BookHotel from '../Components/BookHotel/BookHotel'


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
             <Route path='/signin' element={<SignIn/>} />
            <Route path='/signup' element={<SignUp/>} />
             <Route path='/hotels' element={
                    <Hotel/>
            } />
            <Route path="hotels/:id" element={<BookHotel/>} /> 

            <Route path='/payment' element={<PaymentPart/>} />
            {/* <Route path='/otp' element={<Otp/>} /> */}
               <Route path='/otp' element={<Otp/>}  />
            <Route path='/thanks' element={<Thanks/>} /> 

        </Routes>
    )

}

export default AllRoutes