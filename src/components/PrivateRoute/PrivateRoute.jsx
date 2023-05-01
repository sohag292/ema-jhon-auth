import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'


export default function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <div>Loading...</div>
    }
    if(user){
        return children
    }
  return <Navigate to="/login"  state={{from:location}} replace={true}></Navigate>
}
