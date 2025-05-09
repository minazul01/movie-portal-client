import React, { useContext } from 'react';
import { authentication } from '../../AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authentication);
    if(loading){
      return  <span className="loading loading-bars loading-xl"></span>
    }

    if(!user){
       return <Navigate to="/login"></Navigate>
    }
    return children

   
};

export default PrivateRoute;