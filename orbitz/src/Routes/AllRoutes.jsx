import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from "../Pages/HomePage"

import SignIn from '../Pages/Signin'
import SignUp from '../Pages/Signup'


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
           
           

        </Routes>
    )
}

export default AllRoutes