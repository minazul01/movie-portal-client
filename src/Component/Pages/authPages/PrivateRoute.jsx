import React, { useContext } from 'react';
import { authentication } from '../../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const location = useLocation()
  // console.log(location)
    const {user, loading} = useContext(authentication);
    if(loading){
      return  <div className='flex items-center justify-center my-20'><span className="loading loading-bars loading-xl"></span></div>
    }

    if(!user){
       return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }
    return children

   
};

export default PrivateRoute;