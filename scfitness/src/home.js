import { useEffect, useState } from 'react';
import { collection, getDocs, query, where, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import { Link } from "react-router-dom";
import './navbar.css';
import './home.css';
import { auth } from './firebase';


function Home({user}) {
    const [goals, setGoals] = useState([]);
    const [today, setToday] = useState([]);
    const [tommorow, setTommorow] = useState([]);
    const [dayafter, setDayafter] = useState([]);

    const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    const d = new Date();
    const goalsCol = collection(db, "Goals");
    const q = query(goalsCol, where("email", "==" , user.email));
    const usersGoals = onSnapshot(q, snapshot => {
        const data = snapshot.docs.map(change => change.data());
        data.sort((a,b) => a.timestamp = b.timestamp);
        setGoals(data);
    });

    const workoutCol = collection(db, "Workout");
    let todayct = d.getDay();
    let tmmrct = 0;
    let dayafterct = 0;
    if (todayct == 5 ) {
        tmmrct = 6
        dayafterct = 0;
    }
    else if ( todayct == 6 ) {
        tmmrct = 0;
        dayafterct = 1;
    }
    else {
        tmmrct = d.getDay() + 1;
        dayafterct = d.getDay() + 2;
    }
    const todayct1 = todayct;
    const tmmrct1 = tmmrct;
    const dayafterct1 = dayafterct;
    const todayq = query(workoutCol, where("email", "==", user.email));
    const todaywork = onSnapshot(todayq, snapshot => {
        const data = snapshot.docs.map(change => change.data());
        data.sort((a,b) => a.timestamp = b.timestamp);
        setToday(data);
    });
    console.log(today);
    const tommorowq = query(workoutCol, where("email", "==", user.email));
    const tmmrwork = onSnapshot(tommorowq, snapshot => {
        const data = snapshot.docs.map(change => change.data());
        data.sort((a,b) => a.timestamp = b.timestamp);
        setTommorow(data);
    });
    console.log(tommorow);
    const dayafterq = query(workoutCol, where("email", "==", user.email));
    const dayafterwork = onSnapshot(dayafterq, snapshot => {
        const data = snapshot.docs.map(change => change.data());
        data.sort((a,b) => a.timestamp = b.timestamp);
        setDayafter(data);
    });
    console.log(dayafter);

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

            <div className ="" >

                <div className = "schedule">
                    <div className = "today">
                        <h1>TODAY</h1>
                    {today.map((e, index) => { 
                        if ( todayct1 == 0 ) {
                            return <h4>REST DAY!</h4>
                        }
                        else if ( todayct1 == 1) {
                            return (<small> 
                                {e.monday.zerolet} <br></br>
                                {e.monday.firstlet}<br></br>
                                {e.monday.secondlet}<br></br>
                                {e.monday.thirdlet}<br></br>
                                {e.monday.fourthlet}<br></br>
                                {e.monday.fifthlet}<br></br>
                                {e.monday.sixthlet}
                                </small>
                            );
                        }
                        else if ( todayct1 == 2 ) {
                            return (<small> 
                                {e.tuesday.zerolet} <br></br>
                                {e.tuesday.firstlet}<br></br>
                                {e.tuesday.secondlet}<br></br>
                                {e.tuesday.thirdlet}<br></br>
                                {e.tuesday.fourthlet}<br></br>
                                {e.tuesday.fifthlet}<br></br>
                                {e.tuesday.sixthlet}
                                </small>
                            );
                        } 
                        else if ( todayct1 == 3 ) {
                            return (<small> 
                                {e.wednesday.zerolet} <br></br>
                                {e.wednesday.firstlet}<br></br>
                                {e.wednesday.secondlet}<br></br>
                                {e.wednesday.thirdlet}<br></br>
                                {e.wednesday.fourthlet}<br></br>
                                {e.wednesday.fifthlet}<br></br>
                                {e.wednesday.sixthlet}
                                </small>
                            );
                        }
                        else if ( todayct1 == 4 ) {
                            return (<small> 
                                {e.thursday.zerolet} <br></br>
                                {e.thursday.firstlet}<br></br>
                                {e.thursday.secondlet}<br></br>
                                {e.thursday.thirdlet}<br></br>
                                {e.thursday.fourthlet}<br></br>
                                {e.thursday.fifthlet}<br></br>
                                {e.thursday.sixthlet}
                                </small>
                            );
                        }
                        else if ( todayct1 == 5 ) {
                            return (<small> {e.friday.zerolet} <br></br>
                                {e.friday.firstlet}<br></br>
                                {e.friday.secondlet}<br></br>
                                {e.friday.thirdlet}<br></br>
                                {e.friday.fourthlet}<br></br>
                                {e.friday.fifthlet}<br></br>
                                {e.friday.sixthlet}</small>
                            );

                        }
                        else if ( todayct1 == 6 ) {
                            return (<small> 
                                {e.saturday.zerolet} <br></br>
                                {e.saturday.firstlet}<br></br>
                                {e.saturday.secondlet}<br></br>
                                {e.saturday.thirdlet}<br></br>
                                {e.saturday.fourthlet}<br></br>
                                {e.saturday.fifthlet}<br></br>
                                {e.saturday.sixthlet}
                                </small>
                            );
                        }
                    })}
                    </div>
                    <div className = "tommorow">
                        <h3>TOMMOROW</h3>
                    {tommorow.map((e, index) => { 
                        if ( tmmrct1 == 0 ) {
                            return <h4>REST DAY!</h4>
                        }
                        else if ( tmmrct1 == 1) {
                            return (<small> 
                                {e.monday.zerolet} <br></br>
                                {e.monday.firstlet}<br></br>
                                {e.monday.secondlet}<br></br>
                                {e.monday.thirdlet}<br></br>
                                {e.monday.fourthlet}<br></br>
                                {e.monday.fifthlet}<br></br>
                                {e.monday.sixthlet}
                                </small>
                            );
                        }
                        else if ( tmmrct1 == 2 ) {
                            return (<small> 
                                {e.tuesday.zerolet} <br></br>
                                {e.tuesday.firstlet}<br></br>
                                {e.tuesday.secondlet}<br></br>
                                {e.tuesday.thirdlet}<br></br>
                                {e.tuesday.fourthlet}<br></br>
                                {e.tuesday.fifthlet}<br></br>
                                {e.tuesday.sixthlet}
                                </small>
                            );
                        } 
                        else if ( tmmrct1 == 3 ) {
                            return (<small> 
                                {e.wednesday.zerolet} <br></br>
                                {e.wednesday.firstlet}<br></br>
                                {e.wednesday.secondlet}<br></br>
                                {e.wednesday.thirdlet}<br></br>
                                {e.wednesday.fourthlet}<br></br>
                                {e.wednesday.fifthlet}<br></br>
                                {e.wednesday.sixthlet}
                                </small>
                            );
                        }
                        else if ( tmmrct1 == 4 ) {
                            return (<small> 
                                {e.thursday.zerolet} <br></br>
                                {e.thursday.firstlet}<br></br>
                                {e.thursday.secondlet}<br></br>
                                {e.thursday.thirdlet}<br></br>
                                {e.thursday.fourthlet}<br></br>
                                {e.thursday.fifthlet}<br></br>
                                {e.thursday.sixthlet}
                                </small>
                            );
                        }
                        else if ( tmmrct1 == 5 ) {
                            return (<small> {e.friday.zerolet} <br></br>
                                {e.friday.firstlet}<br></br>
                                {e.friday.secondlet}<br></br>
                                {e.friday.thirdlet}<br></br>
                                {e.friday.fourthlet}<br></br>
                                {e.friday.fifthlet}<br></br>
                                {e.friday.sixthlet}</small>
                            );

                        }
                        else if ( tmmrct1 == 6 ) {
                            return (<small> 
                                {e.saturday.zerolet} <br></br>
                                {e.saturday.firstlet}<br></br>
                                {e.saturday.secondlet}<br></br>
                                {e.saturday.thirdlet}<br></br>
                                {e.saturday.fourthlet}<br></br>
                                {e.saturday.fifthlet}<br></br>
                                {e.saturday.sixthlet}
                                </small>
                            );
                        }
                    })}
                    </div>
                    <div className = "day-after">
                    <h3>In 2 Days</h3>
                    {dayafter.map((e, index) => { 
                        if ( dayafterct1 == 0 ) {
                            return <h4>REST DAY!</h4>
                        }
                        else if ( dayafterct1 == 1) {
                            return (<small> 
                                {e.monday.zerolet} <br></br>
                                {e.monday.firstlet}<br></br>
                                {e.monday.secondlet}<br></br>
                                {e.monday.thirdlet}<br></br>
                                {e.monday.fourthlet}<br></br>
                                {e.monday.fifthlet}<br></br>
                                {e.monday.sixthlet}
                                </small>
                            );
                        }
                        else if ( dayafterct1 == 2 ) {
                            return (<small> 
                                {e.tuesday.zerolet} <br></br>
                                {e.tuesday.firstlet}<br></br>
                                {e.tuesday.secondlet}<br></br>
                                {e.tuesday.thirdlet}<br></br>
                                {e.tuesday.fourthlet}<br></br>
                                {e.tuesday.fifthlet}<br></br>
                                {e.tuesday.sixthlet}
                                </small>
                            );
                        } 
                        else if ( dayafterct1 == 3 ) {
                            return (<small> 
                                {e.wednesday.zerolet} <br></br>
                                {e.wednesday.firstlet}<br></br>
                                {e.wednesday.secondlet}<br></br>
                                {e.wednesday.thirdlet}<br></br>
                                {e.wednesday.fourthlet}<br></br>
                                {e.wednesday.fifthlet}<br></br>
                                {e.wednesday.sixthlet}
                                </small>
                            );
                        }
                        else if ( dayafterct1 == 4 ) {
                            return (<small> 
                                {e.thursday.zerolet} <br></br>
                                {e.thursday.firstlet}<br></br>
                                {e.thursday.secondlet}<br></br>
                                {e.thursday.thirdlet}<br></br>
                                {e.thursday.fourthlet}<br></br>
                                {e.thursday.fifthlet}<br></br>
                                {e.thursday.sixthlet}
                                </small>
                            );
                        }
                        else if ( dayafterct1 == 5 ) {
                            return (<small> {e.friday.zerolet} <br></br>
                                {e.friday.firstlet}<br></br>
                                {e.friday.secondlet}<br></br>
                                {e.friday.thirdlet}<br></br>
                                {e.friday.fourthlet}<br></br>
                                {e.friday.fifthlet}<br></br>
                                {e.friday.sixthlet}</small>
                            );

                        }
                        else if ( dayafterct1 == 6 ) {
                            return (<small> 
                                {e.saturday.zerolet} <br></br>
                                {e.saturday.firstlet}<br></br>
                                {e.saturday.secondlet}<br></br>
                                {e.saturday.thirdlet}<br></br>
                                {e.saturday.fourthlet}<br></br>
                                {e.saturday.fifthlet}<br></br>
                                {e.saturday.sixthlet}
                                </small>
                            );
                        }
                    })}
                    </div>
                </div>
                <div className = "bottom" >
                    <div className = "reference">
                        <h4>REFERENCES</h4>
                    </div>

                    <div className = "goals">
                        <h3>MY GOALS</h3>
                    {goals.map((e, index) => { 
                        return <h6> {e.goal}</h6>
                    })}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Home;