import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider'
const PrivateRoute = ({children}) => {

    const location = useLocation()
    const {user} = useContext(AuthContext)
    console.log(user);
       if(user?.email){

        return children
       }
    return <Navigate to='/login'  state={{from: location}} replace></Navigate>
};

export default PrivateRoute;