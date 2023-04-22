import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Link } from "react-router-dom";
import './navbar.css';
import { auth } from './firebase';
import './goals.css';


function Goal2({user}) {

    const [goal, setGoal] = useState("");
    const [email, setEmail] = useState("");
    // const zero = "";
    // const first = "";
    // const second = "";
    // const third = "";
    // const fourth = "";
    // const fifth = "";
    // const sixth = "";
    // function setNull() {
    //     zero = "";
    //     first = "";
    //     second = "";
    //     third = "";
    //     fourth = "";
    //     fifth = "";
    //     sixth = "";
    // }

    function addWorkout() {
        addDoc(collection(db, "Workout"), {
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday,
        saturday: saturday,
        sunday: sunday,
        email: email
        }).then(console.log(goal));
    }

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
            addWorkout();
        // }
    }

    const [monday, setMonday] = useState({
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: ""

    });
    const [tuesday, setTuesday] = useState({
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: ""
    });
    const [wednesday, setWednesday] = useState({
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: ""
    });
    const [thursday, setThursday] = useState({
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: ""
    });
    const [friday, setFriday] = useState({
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: ""
    });
    const [saturday, setSaturday] = useState({
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: ""
    });
    const [sunday, setSunday] = useState("");

   
    //here I will call the form.js file
    const handleChangeInput = (event) =>{
        const {id , value} = event.target;
        if(id === "goal"){
            if (value == "") {
                alert('Please select a goal!');
            }
            else {
                let zerolet = "";
                let firstlet = "";
                let secondlet = "";
                let thirdlet = "";
                let fourthlet = "";
                let fifthlet = "";
                let sixthlet = "";
                setGoal(value);
                setEmail(user.email);
                if ( value == "Upper Body") {
                    zerolet = "4 x 6 - 8 - Flat Dumbbell Bench Press";
                    firstlet = "4 x 8 - 12 - Incline Dumbbell Bench Press";
                    secondlet = "4 x 8 - 12 - Shoulder Press(Superset with next workout)";
                    thirdlet = "4 x 15 - 20 - Lateral Raises";
                    fourthlet = "4 x 8 - 12 - Cable Flys";
                    fifthlet = "4 x 8 - 12 - Rope Tricep Extensions";
                    sixthlet = "4 x 8 - 12 - Single Arm Tricep Extensions";
                    setMonday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet});//chest and tri
                    //setNull();
                    zerolet = "4 x 15 - 20 - Pullups";
                    firstlet = "4 x 8 - 12 - Chest Supported Rows(Superset with next workout)";
                    secondlet = "4 x 8 - 12 - Chest Supported Rows(Bent forward)";
                    thirdlet = "4 x 8 - 12 - Lat Pulldown";
                    fourthlet = "4 x 8 - 12 - Rear Delt Pulls";
                    fifthlet = "4 x 8 - 12 - Bicep Curls";
                    sixthlet = "4 x 8 - 12 - Hammer Curls";
                    setTuesday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet});//Back and Bi
                    //setNull();
                    zerolet = "4 x 8 - 12 - Squats";
                    firstlet = "4 x 8 - 12 - Leg Press";
                    secondlet = "4 x 8 - 12 - RDL(Romanian Dead Lift)";
                    thirdlet = "4 x 8 - 12 - Leg Extensions";
                    fourthlet = "4 x 8 - 12 - Hamstring Curls";
                    fifthlet = "4 x 8 - 12 - Calf Raises";
                    sixthlet = "";
                    setWednesday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet});//Legs
                    //setNull();
                    zerolet = "4 x 8 - 12 - Chest Supported Rows(Superset with Next workout";
                    firstlet = "4 x 8 - 12 - Chest Supported Rows(Bent forward)";
                    secondlet = "4 x 8 - 12 - Lat Pulldowns";
                    thirdlet = "4 x 8 - 12 - Flat Dumbbell Bench Press";
                    fourthlet = "4 x 8 - 12 - Incline Dumbbell Bench Press";
                    fifthlet = "4 x 8 - 12 - Cable Flys";
                    sixthlet = "4 x 8 - 12 - Cable Lat Pulldowns";
                    setThursday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet});//Back and Chest
                    //setNull();
                    zerolet = "4 x 8 - 12 - Shoulder Press(Superset with next workout)";
                    firstlet = "4 x 15 - 20 - Lateral Raises";
                    secondlet = "4 x 8 - 12 - Bicep Straight Bar Extensions";
                    thirdlet = "4 x 8 - 12 - Tricep Rope Extensions";
                    fourthlet = "4 x 8 - 12 - Bicep Curls(Superset with next workout";
                    fifthlet = "4 x 8 - 12 - Dumbbell Skullcrushers";
                    sixthlet = "4 x 8 - 12 - Rear Delt Rows";
                    setFriday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet});//Arms and Abs and Shoulder                    this.setNull();
                    //setNull();
                    zerolet = "4 x 8 - 12 - Squats";
                    firstlet = "4 x 8 - 12 - Leg Press";
                    secondlet = "4 x 8 - 12 - RDL(Romanian Dead Lift)";
                    thirdlet = "4 x 8 - 12 - Leg Extensions";
                    fourthlet = "4 x 8 - 12 - Hamstring Curls";
                    fifthlet = "4 x 8 - 12 - Calf Raises";
                    sixthlet = "";
                    setSaturday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet});//Legs
                    //setNull();
                    setSunday("Rest");
                }
                else if ( value == "Lower Body") {
                    zerolet = "4 x 15 - 20 - Squat";
                    firstlet = "4 x 8 - 12 - Hack Squat";
                    secondlet = "4 x 8 - 12 - Leg Press";
                    thirdlet = "4 x 8 - 12 - Leg Extensions";
                    fourthlet = "4 x 8 - 12 - Hamstring Extensions";
                    fifthlet = "4 x 8 - 12 - Calf Raises";
                    sixthlet = "";
                    setMonday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet});//Legs (Quad Focus)
                    //setNull();
                    zerolet = "4 x 15 - 20 - Pullups";
                    firstlet = "4 x 8 - 12 - Chest Supported Rows(Superset with next workout)";
                    secondlet = "4 x 8 - 12 - Chest Supported Rows(Bent forward)";
                    thirdlet = "4 x 8 - 12 - Lat Pulldown";
                    fourthlet = "4 x 8 - 12 - Rear Delt Pulls";
                    fifthlet = "4 x 8 - 12 - Bicep Curls";
                    sixthlet = "4 x 8 - 12 - Hammer Curls";
                    setTuesday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet});//Chest and tri
                    //setNull();
                    zerolet = "4 x 15 - 20 - Pullups";
                    firstlet = "4 x 8 - 12 - Chest Supported Rows(Superset with next workout)";
                    secondlet = "4 x 8 - 12 - Chest Supported Rows(Bent forward)";
                    thirdlet = "4 x 8 - 12 - Lat Pulldown";
                    fourthlet = "4 x 8 - 12 - Rear Delt Pulls";
                    fifthlet = "4 x 8 - 12 - Bicep Curls";
                    sixthlet = "4 x 8 - 12 - Hammer Curls";
                    setWednesday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet});//Back and Bi
                    //setNull();
                    zerolet = "4 x 15 - 20 - Pullups";
                    firstlet = "4 x 8 - 12 - Chest Supported Rows(Superset with next workout)";
                    secondlet = "4 x 8 - 12 - Chest Supported Rows(Bent forward)";
                    thirdlet = "4 x 8 - 12 - Lat Pulldown";
                    fourthlet = "4 x 8 - 12 - Rear Delt Pulls";
                    fifthlet = "4 x 8 - 12 - Bicep Curls";
                    sixthlet = "4 x 8 - 12 - Hammer Curls";
                    setThursday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet});// Legs (Hamstring and Glute Focus)
                    //setNull();
                    zerolet = "4 x 8 - 12 - Squat";
                    firstlet = "4 x 8 - 12 - RDL(Romanian Dead Lift";
                    secondlet = "4 x 8 - 12 - Hip Abductors";
                    thirdlet = "4 x 8 - 12 - Leg Extensions";
                    fourthlet = "4 x 8 - 12 - Hamstring Extensions";
                    fifthlet = "4 x 8 - 12 - Calf Raises";
                    sixthlet = "";
                    setFriday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet}); // Upper Body (everything)
                    //setNull();
                    zerolet = "4 x 8 - 12 - Squats";
                    firstlet = "4 x 8 - 12 - Leg Press";
                    secondlet = "4 x 8 - 12 - RDL(Romanian Dead Lift)";
                    thirdlet = "4 x 8 - 12 - Leg Extensions";
                    fourthlet = "4 x 8 - 12 - Hamstring Curls";
                    fifthlet = "4 x 8 - 12 - Calf Raises";
                    sixthlet = "";
                    setSaturday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet}); //Legs (everything)
                    //setNull();
                    setSunday("Rest");
                }
                else { //if value == all
                    zerolet = "4 x 6 - 8 - Flat Dumbbell Bench Press";
                    firstlet = "4 x 8 - 12 - Incline Dumbbell Bench Press";
                    secondlet = "4 x 8 - 12 - Shoulder Press(Superset with next workout)";
                    thirdlet = "4 x 15 - 20 - Lateral Raises";
                    fourthlet = "4 x 8 - 12 - Cable Flys";
                    fifthlet = "4 x 8 - 12 - Rope Tricep Extensions";
                    sixthlet = "4 x 8 - 12 - Single Arm Tricep Extensions";
                    setMonday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet}); //Push
                    //setNull();
                    zerolet = "4 x 15 - 20 - Pullups";
                    firstlet = "4 x 8 - 12 - Chest Supported Rows(Superset with next workout)";
                    secondlet = "4 x 8 - 12 - Chest Supported Rows(Bent forward)";
                    thirdlet = "4 x 8 - 12 - Lat Pulldown";
                    fourthlet = "4 x 8 - 12 - Rear Delt Pulls";
                    fifthlet = "4 x 8 - 12 - Bicep Curls";
                    sixthlet = "4 x 8 - 12 - Hammer Curls";
                    setTuesday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet}); //Pull
                    //setNull();
                    zerolet = "4 x 8 - 12 - Squats";
                    firstlet = "4 x 8 - 12 - Leg Press";
                    secondlet = "4 x 8 - 12 - RDL(Romanian Dead Lift)";
                    thirdlet = "4 x 8 - 12 - Leg Extensions";
                    fourthlet = "4 x 8 - 12 - Hamstring Curls";
                    fifthlet = "4 x 8 - 12 - Calf Raises";
                    sixthlet = "";
                    setWednesday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet}); //Legs
                    //setNull();
                    zerolet = "4 x 6 - 8 - Flat Dumbbell Bench Press";
                    firstlet = "4 x 8 - 12 - Incline Dumbbell Bench Press";
                    secondlet = "4 x 8 - 12 - Shoulder Press(Superset with next workout)";
                    thirdlet = "4 x 15 - 20 - Lateral Raises";
                    fourthlet = "4 x 8 - 12 - Cable Flys";
                    fifthlet = "4 x 8 - 12 - Rope Tricep Extensions";
                    sixthlet = "4 x 8 - 12 - Single Arm Tricep Extensions";
                    setThursday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet}); //Push
                    //setNull();
                    zerolet = "4 x 15 - 20 - Pullups";
                    firstlet = "4 x 8 - 12 - Chest Supported Rows(Superset with next workout)";
                    secondlet = "4 x 8 - 12 - Chest Supported Rows(Bent forward)";
                    thirdlet = "4 x 8 - 12 - Lat Pulldown";
                    fourthlet = "4 x 8 - 12 - Rear Delt Pulls";
                    fifthlet = "4 x 8 - 12 - Bicep Curls";
                    sixthlet = "4 x 8 - 12 - Hammer Curls";
                    setFriday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet}); //Pull
                    //setNull();
                    zerolet = "4 x 8 - 12 - Squats";
                    firstlet = "4 x 8 - 12 - Leg Press";
                    secondlet = "4 x 8 - 12 - RDL(Romanian Dead Lift)";
                    thirdlet = "4 x 8 - 12 - Leg Extensions";
                    fourthlet = "4 x 8 - 12 - Hamstring Curls";
                    fifthlet = "4 x 8 - 12 - Calf Raises";
                    sixthlet = "";
                    setSaturday({zerolet, firstlet, secondlet, thirdlet, fourthlet, fifthlet, sixthlet}); //Legs
                    //setNull();
                    setSunday("Rest");
                }
            }
        }
    }

    return (
        <div className = "whole">
            <div className="form">        
                    <form onSubmit = {handleSubmit}>
                    <h3>What body part do you want to focus on?</h3>
                    <select id="goal" name="goal" onChange={(e) => handleChangeInput(e)} required>
                        <option value = "N/A"> -- Select -- </option>
                        <option>Upper Body</option>
                        <option>Lower Body</option>
                        <option>All body</option>
                    </select>
                    <Link to="/goal3" className="next-button" onClick = {handleSubmit}> Next </Link>
                    </form>
                </div> 
        </div>
    );
}

export default Goal2;