import { useEffect, useState } from 'react';
import { collection, getDocs, query, where, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import { Link } from "react-router-dom";
import './navbar.css';
import { auth } from './firebase';
import './schedule.css'
import Schedfrag from './schedulefrag.jsx';

function Sched({user}) {
    const [today, setToday] = useState([]);

    const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    const d = new Date();
    const workoutCol = collection(db, "Workout");
    const todayq = query(workoutCol, where("email", "==", user.email));
    const todaywork = onSnapshot(todayq, snapshot => {
        const data = snapshot.docs.map(change => change.data());
        data.sort((a,b) => a.timestamp = b.timestamp);
        setToday(data);
    });

    return (
        <div className = "whole">
            <div className="navbar">
                { <div className = "user-message">
                <small> {user.displayName} </small> 
                </div> }
                <div className = "middle">
                    <small>SCFitness</small>
                </div>
                <div className="add-form">
                <Link to="/home" className="FormButton">Home</Link>

                </div>
                <div className="add-form">
                <Link to="/sched" className="FormButton">Full Schedule</Link>

                </div>
                <div className="add-form">
                <Link id="signout" className="FormButton" to="/"
                    onClick={() => auth.signOut()}>Sign Out
                </Link>
                </div>
            </div>

            <div className = "schedule">
            {today.map((e, index) => {       
                return <Schedfrag key = {index} 
                monzerolet = {e.monday.zerolet} 
                monfirstlet = {e.monday.firstlet} 
                monsecondlet = {e.monday.secondlet} 
                monthirdlet = {e.monday.thirdlet} 
                monfourthlet = {e.monday.fourthlet} 
                monfifthlet = {e.monday.fifthlet} 
                monsixthlet = {e.monday.sixthlet} 

                tuezerolet = {e.tuesday.zerolet} 
                tuefirstlet = {e.tuesday.firstlet} 
                tuesecondlet = {e.tuesday.secondlet} 
                tuethirdlet = {e.tuesday.thirdlet} 
                tuefourthlet = {e.tuesday.fourthlet} 
                tuefifthlet = {e.tuesday.fifthlet} 
                tuesixthlet = {e.tuesday.sixthlet} 

                wedzerolet = {e.wednesday.zerolet} 
                wedfirstlet = {e.wednesday.firstlet} 
                wedsecondlet = {e.wednesday.secondlet} 
                wedthirdlet = {e.wednesday.thirdlet} 
                wedfourthlet = {e.wednesday.fourthlet} 
                wedfifthlet = {e.wednesday.fifthlet} 
                wedsixthlet = {e.wednesday.sixthlet} 

                thuzerolet = {e.thursday.zerolet} 
                thufirstlet = {e.thursday.firstlet} 
                thusecondlet = {e.thursday.secondlet} 
                thuthirdlet = {e.thursday.thirdlet} 
                thufourthlet = {e.thursday.fourthlet} 
                thufifthlet = {e.thursday.fifthlet} 
                thusixthlet = {e.thursday.sixthlet} 

                frizerolet = {e.friday.zerolet} 
                frifirstlet = {e.friday.firstlet} 
                frisecondlet = {e.friday.secondlet} 
                frithirdlet = {e.friday.thirdlet} 
                frifourthlet = {e.friday.fourthlet} 
                frififthlet = {e.friday.fifthlet} 
                frisixthlet = {e.friday.sixthlet} 

                satzerolet = {e.saturday.zerolet} 
                satfirstlet = {e.saturday.firstlet} 
                satsecondlet = {e.saturday.secondlet} 
                satthirdlet = {e.saturday.thirdlet} 
                satfourthlet = {e.saturday.fourthlet} 
                satfifthlet = {e.saturday.fifthlet} 
                satsixthlet = {e.saturday.sixthlet} 

                sun = {e.sunday}
                />
            })}
            </div>
        </div>
    );
    

}

export default Sched;