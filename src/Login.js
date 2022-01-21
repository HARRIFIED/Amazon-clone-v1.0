import './Login.css';

import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react'
import { useAuth } from './Context/AuthContext';




const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    



    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {

        e.preventDefault();

        
        try {
            setError('')
            setLoading(true)
            await login(email, password)
            history.push('/');
        } catch {
            setError('failed to SignIn or account does not exist')
        }
        setLoading(false)
    }


    const emailChange = (e) => {
        setEmail(e.target.value);
    }
    const passwordChange = (e) => {
        setPassword(e.target.value);
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
                <h1>Sign-In</h1>
                {
                    error
                    &&
                    <div class="alert alert-danger" role="alert">
                        {error}
                    </div>
                }

                <form onSubmit={handleSubmit}>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={emailChange} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={passwordChange} />
                    <Link to="/">
                        <button type='submit' disabled={loading}
                        onClick={handleSubmit} className="login_btn">Sign in</button>
                    </Link>
                </form>
                <p>
                    By continuing, you agree to <Link to="/Login" className="link2">Amazon's Conditions of use </Link>
                    and <Link to="/Login" className="link2">Privacy Notice.</Link>
                </p>
                <div className="dropdown">
                    <button className="dropbtn">Need help?</button>
                    <div className="dropdown-content">
                        <Link to="/forgot-password" className="link">forgot your password?</Link>
                        <Link to="/Login" className="link">other issues with signing in?</Link>
                    </div>
                </div>

                <p>new to Amazon?</p>
                <Link to="/SignUp">
                    <button
                        className="register_btn" type='submit'>
                        Create your Amazon Account</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
