import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { ErrorContext } from '../../context/ErrorContext';

const styles = {
    container: {
        height: '50vh',
        width: '30%',
        backgroundColor: '#ffffff',
        margin: '0 auto',
        position: 'relative'
    },
    inputContainer: {
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    button: {
        marginTop: 10
    },
}

//validation schema
const LoginSchema = Yup.object().shape({
    email: Yup.string().email()
        .min(6, 'Email too short!')
        .max(100, 'Email too long!')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password too short!')
        .max(100, 'Password too long!')
        .required('Required')
})


export const Login = props => {

    const { authState, setAuthState } = useContext(AuthContext);
    const { error, setError } = useContext(ErrorContext);

    // checks if the login matches db entry
    const onSubmit = async values => {
        let response = await axios({ method: 'post', url: '/api/login', data: values });
        setAuthState(response.data);
        setTimeout(() => {
            props.history.push('/home')
        }, 2000)
    }

    return (
        <div style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    onSubmit(values);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                        <form onSubmit={handleSubmit}>
                            <div style={styles.inputContainer}>
                                <TextField
                                    variant="outlined"
                                    label="Enter your email address"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    helperText={errors.email && touched.email && errors.email}
                                    margin="dense"
                                    error={(errors.email && touched.email && errors.email) ? true : false}
                                />
                                <TextField
                                    variant="outlined"
                                    label="Enter your password."
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    helperText={errors.password && touched.password && errors.password}
                                    margin="dense"
                                    error={(errors.password && touched.password && errors.password) ? true : false}
                                />
                                <p style={{color: 'red'}}>{error}</p>
                                <Button type="submit" disabled={isSubmitting} style={styles.button} color="primary" variant="contained">
                                    Submit
                                </Button>
                            </div>

                        </form>
                    )}
            </Formik>
        </div >
    )
}