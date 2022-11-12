import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children} ) => {
    const auth = useSelector(state=>state.Auth.auth)
   
    
  
  return (
    <Navigate to ='/signin'/>
  )
}

export default PrivateRoute