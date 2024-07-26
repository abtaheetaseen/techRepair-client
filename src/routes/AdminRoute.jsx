import React, { useContext } from 'react'
import useAdmin from '../hooks/useAdmin'
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading || isAdminLoading){
        return <div className='flex items-center justify-center'>
        <div className="loading loading-infinity loading-lg min-h-screen "></div>
    </div> 
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
}

export default AdminRoute
