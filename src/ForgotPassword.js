import React from 'react';
import './Login.css';

import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useAuth } from './Context/AuthContext';



    
const ForgotPassword = () => {


    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { resetPassword } = useAuth();
    const [message, setMessage] = useState('');


    async function handleSubmit(e) {

        e.preventDefault();

        
        try {
            setError('')
            setMessage('')
            setLoading(true)
            await resetPassword(email)
            setMessage('Password reset details has been sent to your email address')
            
        } catch {
            setError('failed to SignIn or account does not exist')
        }
        setLoading(false)
    }


    const emailChange = (e) => {
        setEmail(e.target.value);
    }
   

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="logo"
                />
            </Link>
            <div className="login_container">
                <h1>Forgot Password</h1>
                {
                    error
                    &&
                    <div class="alert alert-danger" role="alert">
                        {error}
                    </div>
                }

                {
                    message
                    &&
                    <div class="alert alert-success" role="alert">
                        {message}
                    </div>
                }
                <form onSubmit={handleSubmit}>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={emailChange} />
                    
                    <Link to="/">
                        <button type='submit' disabled={loading}
                        onClick={handleSubmit} className="login_btn">Reset Password</button>
                    </Link>
                </form>
                <p>
                    By continuing, you agree to <Link to="/Login" className="link2">Amazon's Conditions of use </Link>
                    and <Link to="/Login" className="link2">Privacy Notice.</Link>
                </p>
                <div className="dropdown">
                    <button className="dropbtn">Need help?</button>
                    <div className="dropdown-content">
                        <Link to="/Login" className="link">other issues with signing in?</Link>
                    </div>
                </div>
                <p>
                    Already have an account?
                    <Link to="/Login" className="link2">Sign-In </Link>
                </p>
                <p>new to Amazon?</p>
                <Link to="/SignUp">
                    <button
                        className="register_btn" type='submit'>
                        Create your Amazon Account
                    </button>
                </Link>
            </div>
        </div>
    )
}


export default ForgotPassword