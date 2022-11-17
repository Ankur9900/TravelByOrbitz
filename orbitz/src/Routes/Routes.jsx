
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PaymentPart from '../Components/Payments/Payment'
import HomePage from '../pages/HomePage'
import Hotel from '../pages/Hotels'
import Otp from '../pages/Otp'
import SignIn from '../pages/Signin'
import Thanks from '../pages/Thankyou'
import SignUp from "../pages/Signup"
import BookHotel from '../Components/BookHotel/BookHotel'


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
             <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
             <Route path='/hotels' element={
                    <Hotel />
            } />
            <Route path="hotels/:id" element={<BookHotel/>} /> 

            <Route path='/payment' element={<PaymentPart />} />
            <Route path='/otp' element={<Otp />} />
            <Route path='/thanks' element={<Thanks />} /> 

        </Routes>
    )

}

export default AllRoutes