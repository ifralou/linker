import React from 'react';
import {timerToString} from "../../hooks/useTimer.js";

const TimerPanel = ({timer, finish, backToThing}) => {
    console.log(timer);
    const {name, start, end} = timer;
    const action = (e) => {
        e.preventDefault()
        console.log("clicked button");
        finish();
        backToThing(name);
    }


    return (
        <div>
            <h2>{name}</h2>
            <div
                className={"timer-planet-wrapper"}
                onClick={action}
            >
                <div className={"planet"}>
                    <div>{timer.name !== "" && timerToString(timer)}</div>
                </div>
                <div className={"moon"}></div>
            </div>
        </div>
    );
};

export default TimerPanel;