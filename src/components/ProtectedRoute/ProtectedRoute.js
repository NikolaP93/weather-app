import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'
import { ErrorContext } from '../../context/ErrorContext';

const ProtectedRoute = ({ component, ...props }) => {

    const Component = component;
    const { authState } = useContext(AuthContext);
    const { error, setError } = useContext(ErrorContext);

    useEffect(()=>{
        if(!authState) {
            setError('Wrong credentials.')
        }
    },[authState])

    return authState ? (
        <Component {...props} />
    ) :
        <Redirect to={{ pathname: '/' }} />
}

export default withRouter(ProtectedRoute);