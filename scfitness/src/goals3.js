import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Link } from "react-router-dom";
import './navbar.css';
import { auth } from './firebase';
import './goals.css';

function Goal3({user}) {
    const [goal, setGoal] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        // if (goal == "" || goal == "N/A") {
        //     alert('Please select a goal!');
        // }
        // else {
            alert('A form was submitted: ' + goal);
            // event.preventDefault();

            addDoc(collection(db, "Goals"), {
            goal: goal,
            email: email
            }).then(console.log(goal));
        // }
    }
    //here I will call the form.js file
    const handleChangeInput = (event) =>{
        const {id , value} = event.target;
        if(id === "goal"){
            if (value == "") {
                alert('Please select a goal!');
            }
            else {
                setGoal(value);
                setEmail(user.email);
            }
        }
    }

    return (
        <div className = "whole">
            <div className="form">       
                    <form onSubmit = {handleSubmit}>
                        <h3>Do you have any weight goals?</h3>
                        {/* <label for="current-weight">Current weight:</label>
                        <input type="text" id="current-weight" name="current-weight"/> */}
                        <label for="ideal-weight">Ideal weight:
                            <input type="number" id="goal" name="goal" onChange={(e) => handleChangeInput(e)} required/>  
                        </label>
                        <Link to="/home" className="next-button" onClick = {handleSubmit}> Next </Link>
                    </form>
                </div>
        </div>
    );
}

export default Goal3;