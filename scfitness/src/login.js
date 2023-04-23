import './App.css'; // import the styles used for App.js
import './login.css';
import React from 'react';
import { signInWithGoogle } from './firebase';
const Login = () => {
    return ( // the Login component just contains a Log In button
        <div className="whole"> 
            <div className="world">
                <div className="row">
                    <div className="col-7">
                        <div>
                            <img src={require('./img/login.png')} />
                        </div>
                    </div>
                    <div className="right col-5">
                        <div className="newh1">
                            <h1>SCFitness</h1>
                        </div>
                        <div className="newh3">
                            <h3>Start Your Fitness Journey With Us!</h3>
                        </div>
                        <div className="button_css">
                            <button className="button" onClick={signInWithGoogle}>
                                Sign In With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;