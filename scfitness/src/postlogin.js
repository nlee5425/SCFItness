import { useEffect, useState } from 'react';
import { collection, getDocs, query, where, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import { Link } from "react-router-dom";
import './navbar.css';
import './postlogin.css';
import { auth } from './firebase';
import './goals.css';

function Post({user}) {
    const [goals, setGoals] = useState([]);
    const goalsCol = collection(db, "Goals");
    const q = query(goalsCol, where("email", "==" , user.email));
    const usersGoals = onSnapshot(q, snapshot => {
        const data = snapshot.docs.map(change => change.data());
        data.sort((a,b) => a.timestamp = b.timestamp);
        setGoals(data);
    });
    if ( goals.length == 0 ) {
        return (
            <div className = "whole">
                <div className ="world">
                    <div className="text">
                        <h1>Tell us a little about your fitness goals!</h1>
                    </div>
                    <Link to="/goal1" className="button">Fill out your goals</Link>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className = "whole">
                <div className ="world">
                    <div className="text">
                        <h1>Welcome back to FitnessSC</h1>
                    </div>
                    <Link to="/home" className="button">Go to Home Page</Link>
                </div>
            </div>
        );
    }
    
}

export default Post;