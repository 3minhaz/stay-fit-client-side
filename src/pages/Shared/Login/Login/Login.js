import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import google from '../../../../images/Google.PNG';
import './login.css';

const Login = () => {
    const { googleSignIn, signInUsingEmail } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const loginWithGoogle = () => {
        googleSignIn(location, navigate)
    }

    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        const userEmail = data.email;
        const userPassword = data.password;
        signInUsingEmail(userEmail, userPassword, location, navigate);
        reset();
    };
    return (
        <div >
            <div className='form-login'>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        {/* <Form.Label className="form-label">Email address</Form.Label> */}
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            className='w-100'
                            {...register("email", {
                                required: true,
                                pattern:
                                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            })}
                        />
                        {errors.email?.type === "required" && (
                            <small className="required-text">Email is required</small>
                        )}
                        {errors.email?.type === "pattern" && (
                            <small className="required-text">Invalid Email</small>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control
                            type="password"
                            className='w-100'
                            placeholder="Password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        {errors.password?.type === "required" && (
                            <small className="required-text">Password is required</small>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formHorizontalCheck">
                        <button type="submit" className="w-100 btn btn-success">
                            Sign in
                        </button>
                    </Form.Group>
                </Form>
            </div>
            <div className="text-center m-5">
                <button onClick={loginWithGoogle} className="btn btn-white border border-2 my-3" height="25px"><span><img height="25px" src={google} alt="" />Google Signin</span></button>
                <Link className='text-decoration-none ms-2' to='/signup'>Not Registered? Click to signup.</Link>
            </div>
        </div>
    );
};

export default Login;