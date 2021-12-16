import React from 'react'
import './Login.css'
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { auth } from './firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault(); // This stops the refresh of the page
        // Do the login logic
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) =>{
                // Logged In, Redirect to homepage....
                history.push('/');
            })
            .catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault(); // This stops the refresh of the page
        // Do the login logic
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            // Create A User And Logged In , redirect to homepage
            history.push("/");
        })
        .catch((e) => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
        

        <div className="login__container">
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Conditions of Use and Sale. Please see our Privacy Notice, out Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
