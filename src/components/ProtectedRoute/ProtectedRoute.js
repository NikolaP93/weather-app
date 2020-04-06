import React from 'react'
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const ProtectedRoute = ({ component, ...props }) => {
    const Component = component;
    const isAuthenticated = true;
    return isAuthenticated ? (
        <Component {...props}/>
    ) :
        <Redirect to={{ pathname: '/' }} />
}

export default withRouter(ProtectedRoute);