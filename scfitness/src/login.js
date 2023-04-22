import './App.css'; // import the styles used for App.js
import React from 'react';
import { signInWithGoogle } from './firebase';
const Login = () => {
    return ( // the Login component just contains a Log In button
        <div> 
            <h1>SCFitness</h1>
            <h1>Start Your Fitness Journey With Us!</h1>
            <button className="button" onClick={signInWithGoogle}>
                Sign In With Google
            </button>
        </div>
    )
}
export default Login;