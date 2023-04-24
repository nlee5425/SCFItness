import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Link } from "react-router-dom";
import './guest.css';

function Guest() {
    return (

        <div className = "whole">
            <div className = "col-7 image">
                <img src={require('./img/gym 1.png')} />

            </div>
            <div className = "col-5 text">
                <h1> I see you are interested in starting your fitness journey but are skeptical! </h1>

                <div className = "form">
                    <h3>What are you skeptical about?</h3>
                    <select id="goal" className="box" name="goal">
                                <option value = "N/A">N/A</option>
                                <option>Wasting your time?</option>
                                <option>Not being able to lose weight?</option>
                                <option>Too much work?</option>
                    </select>
                    <div className="button_case">
                            <Link to="/postguest" className="button"> Submit </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guest;