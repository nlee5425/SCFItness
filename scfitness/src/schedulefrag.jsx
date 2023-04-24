import './schedulefrag.css';

function Schedfrag(props) {

    const today = new Date();
    let dayOfWeek = today.getDay();
    if ( dayOfWeek == 0 ) {
        dayOfWeek += 7;
    }
    dayOfWeek--;
    const beginningOfWeek = new Date(today);
    beginningOfWeek.setDate(today.getDate() - (dayOfWeek));
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
        const day = new Date(beginningOfWeek);
        day.setDate(beginningOfWeek.getDate() + i);
        weekDates.push(day);
    }

    const formattedweekDates = [];
    const options = { month: 'short', day: 'numeric' };
    for (let i = 0; i < 7; i++) {
        formattedweekDates.push(weekDates[i].toLocaleString('en-US', options));
    }

    return (
        <div className = "whole">
            <div className = "header">
            <small>Weekly View</small>
            <br></br>
            <h1>{formattedweekDates[0]} - {formattedweekDates[6]} </h1>
            </div>
        <div className = "schedule">
                <div className = "dayrow">
                        <div className = "indivday">
                            <small>Monday</small>
                            <br></br>
                            <small>{formattedweekDates[0]}</small>
                        </div>
                        <div className = "indivday">
                            <small>Tuesday</small>
                            <br></br>
                            <small>{formattedweekDates[1]}</small>
                        </div>
                        <div className = "indivday">
                            <small>Wednesday</small>
                            <br></br>
                            <small>{formattedweekDates[2]}</small>
                            
                        </div>
                        <div className = "indivday">
                            <small>Thursday</small>
                            <br></br>
                            <small>{formattedweekDates[3]}</small>
                            
                        </div>
                        <div className = "indivday">
                            <small>Friday</small>
                            <br></br>
                            <small>{formattedweekDates[4]}</small>
                            
                        </div>
                        <div className = "indivday">
                            <small>Saturday</small>
                            <br></br>
                            <small>{formattedweekDates[5]}</small>
                            
                        </div>
                        <div className = "indivday">
                            <small>Sunday</small>
                            <br></br>
                            <small>{formattedweekDates[6]}</small>
                        </div>
                </div>
                <div className = "workoutrow">

                        <div className = "day">
                                    <small> 
                                        <br></br>
                                        {props.monzerolet} <br></br>
                                        {props.monfirstlet}<br></br>
                                        {props.monsecondlet}<br></br>
                                        {props.monthirdlet}<br></br>
                                        {props.monfourthlet}<br></br>
                                        {props.monfifthlet}<br></br>
                                        {props.monsixthlet}
                                    </small>
                                
                              
                        </div>
                        <div className = "day">
                            <small> 
                            <br></br>
                                {props.tuezerolet} <br></br>
                                {props.tuefirstlet}<br></br>
                                {props.tuesecondlet}<br></br>
                                {props.tuethirdlet}<br></br>
                                {props.tuefourthlet}<br></br>
                                {props.tuefifthlet}<br></br>
                                {props.tuesixthlet}
                            </small>
                        </div>
                        <div className = "day">
                            <small> 
                            <br></br>
                                {props.wedzerolet} <br></br>
                                {props.wedfirstlet}<br></br>
                                {props.wedsecondlet}<br></br>
                                {props.wedthirdlet}<br></br>
                                {props.wedfourthlet}<br></br>
                                {props.wedfifthlet}<br></br>
                                {props.wedsixthlet}
                            </small>
                        </div>
                        <div className = "day">
                            <small> 
                            <br></br>
                                {props.thuzerolet} <br></br>
                                {props.thufirstlet}<br></br>
                                {props.thusecondlet}<br></br>
                                {props.thuthirdlet}<br></br>
                                {props.thufourthlet}<br></br>
                                {props.thufifthlet}<br></br>
                                {props.thusixthlet}
                            </small>
                        </div>
                        <div className = "day">
                            <small> 
                            <br></br>
                                {props.frizerolet} <br></br>
                                {props.frifirstlet}<br></br>
                                {props.frisecondlet}<br></br>
                                {props.frithirdlet}<br></br>
                                {props.frifourthlet}<br></br>
                                {props.frififthlet}<br></br>
                                {props.frisixthlet}
                            </small>
                        </div>
                        <div className = "day">
                            <small> 
                            <br></br>
                                {props.satzerolet} <br></br>
                                {props.satfirstlet}<br></br>
                                {props.satsecondlet}<br></br>
                                {props.satthirdlet}<br></br>
                                {props.satfourthlet}<br></br>
                                {props.satfifthlet}<br></br>
                                {props.satsixthlet}
                            </small>
                        </div>
                        <div className = "day">
                            <small> 
                            <br></br>
                                {props.sun} Day <br></br>
                                Although it is a rest day, make it your active rest day!
                                Go on a walk or play a sport you like! 
                                Keep your body in the active mindset!
                                
                            </small>
                        </div> 
                </div>
                        
        </div>
        </div>
    );
}

export default Schedfrag;
