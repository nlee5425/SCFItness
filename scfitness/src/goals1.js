import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Link } from "react-router-dom";
import './navbar.css';
import { auth } from './firebase';
import './goals.css';

function Goal1({user}) {
    const [goal, setGoal] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        
            alert('A form was submitted: ' + goal);
            // event.preventDefault();

            addDoc(collection(db, "Goals"), {
            goal: goal,
            email: email
            }).then(console.log(goal));
        
        
    }
    //here I will call the form.js file
    const handleChangeInput = (event) =>{
        const {id , value} = event.target;
        if(id === "goal"){
            if (value == "N/A" || value == "") {
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
                    <form onSubmit={handleSubmit}>
                    <h4>Take a short survey to get started.</h4>
                    <h3>What are your fitness goals?</h3>
                    <h4>Goal:</h4>
                    <select id="goal" name="goal" onChange={(e) => handleChangeInput(e)} required>
                        <option value = "N/A">N/A</option>
                        <option>Gain Muscle</option>
                        <option>Lose Weight</option>
                        <option>Cardio</option>
                    </select>
                    <Link to="/goal2" className="next-button" onClick = {handleSubmit}> Next </Link>

                    </form>
            </div> 

        </div>
    );
}

export default Goal1;