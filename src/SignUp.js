import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from './Context/AuthContext';

const SignUp = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');


    //debugging
    // const [currentUser, setCurrentUser] = useState(null);
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signUp } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        setError("")
        e.preventDefault();

        if (password !== passwordConfirm) {
            return setError('passwords do not match')

        }
        try {
            setError('')
            setLoading(true)
            await signUp(email, password)
            history.push("/Login")
        } catch {
            setError('failed to create an account')
        }
        setLoading(false)
    }


    const emailChange = (e) => {
        setEmail(e.target.value);
    }
    const passwordChange = (e) => {
        setPassword(e.target.value);
    }
    const passwordConfirmChange = (e) => {
        setPasswordConfirm(e.target.value);
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
                <h1>Create account</h1>

                <form onSubmit={handleSubmit}>

                    {
                        error
                        &&
                        <div class="alert alert-danger" role="alert">
                            {error}
                        </div>
                    }


                    <h5>Your name</h5>
                    <input type="text" id="name" required />
                    <h5>Email</h5>
                    <input type="email" id="email" value={email} onChange={emailChange} required />
                    <h5>Password</h5>
                    <input type="password" id="password" value={password} onChange={passwordChange} required />
                    <h5>Re-enter password</h5>
                    <input type="password" id="password-confirm" value={passwordConfirm} onChange={passwordConfirmChange} required />
                    <Link to="/Login">
                        <button type='submit' disabled={loading} onClick={handleSubmit}
                            className="login_btn">Create your Amazon account
                        </button>
                    </Link>
                </form>
                <p>
                    By creating an account, you agree to Amazon's
                    <Link to="/" className="link2"> Conditions of Use</Link> and  <Link to="/" className="link2">
                        Privacy Notice.</Link>
                </p>
                <p>
                    Already have an account?
                    <Link to="/Login" className="link2">Sign-In </Link>
                </p>
                <p>
                    Buying for work? <Link className="link2">Create a free business account</Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp;
