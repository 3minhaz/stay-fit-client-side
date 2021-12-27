import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="grow" />
    }
    if (user.email) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} />
    }
}

export default PrivateRoute;