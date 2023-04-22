import { useEffect, useState } from 'react';
import { collection, getDocs, query, where, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import { Link } from "react-router-dom";
import './navbar.css';
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
                <h1>Tell us a little about your fitness goals!</h1>
                <Link to="/goal1">Fill out your goals</Link>
            </div>
        );
    }
    else {
        return (
            <div className = "whole">
                <h1>Welcome back to FitnessSC</h1>
                <Link to="/home">Go to Home Page</Link>
            </div>
        );
    }
    
}

export default Post;