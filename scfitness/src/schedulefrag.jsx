import './schedulefrag.css';

function Schedfrag(props) {
    return (
        <div className = "schedule">
                        <div className = "day">
                            Monday    
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
                            Tuesday
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
                            Wednesday
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
                            Thursday
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
                            Friday
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
                            Saturday
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
                            Sunday
                            <small> 
                            <br></br>
                                {props.sun} <br></br>
                            </small>
                        </div> 
        </div>
    );
}

export default Schedfrag;
