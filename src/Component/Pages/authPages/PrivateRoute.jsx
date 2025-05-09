import React, { useContext } from 'react';
import { authentication } from '../../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const location = useLocation()
  // console.log(location)
    const {user, loading} = useContext(authentication);
    if(loading){
      return  <span className="loading loading-bars loading-xl"></span>
    }

    if(!user){
       return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }
    return children

   
};

export default PrivateRoute;