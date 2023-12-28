import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ check }) => {
    const { user } = useContext(UserContext);

    return check.includes(user.role) && user ? <Outlet /> : <Navigate to={"/signin"} />
}

export default PrivateRoute