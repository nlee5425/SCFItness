import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Link } from "react-router-dom";
import './postguest.css';

function PostGuest(props) {
    return (

        <div className = "whole">
            <div className = "col-7 image">
                <img src={require('./img/gym 1.png')} />

            </div>
            <div className = "col-5 text">
                <h1> I understand your skepticsm! </h1>
                <h3>However, with every new step you decide to partake in your life, the first step is always the hardest.
                I assure you that with the help of FitnessSC, we will not be wasting your time and we will help you achieve your goals! 
                </h3>
                <br></br>
                <h3>Instead of waiting to take the first step, sign up now and overcome the hardest part of beginning your fitness journey!</h3>
                <Link to ="/" className = "button">Sign up!</Link>
                
            </div>
        </div>
    );
}

export default PostGuest;