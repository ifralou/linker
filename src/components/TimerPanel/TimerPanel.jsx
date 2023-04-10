import React from 'react';
import {timerToString} from "../../customReact/hooks/useTimer.js";
import {useApplicationContext} from "../../customReact/contexts/AppFuncContext.jsx";

const TimerPanel = () => {

    const {
        timerContext: {
            timer,
            finishTimer
        },
        panesContext: {
            moveToSelectedThing
        }

    } = useApplicationContext();

    const {name, start, end} = timer;
    const action = (e) => {
        e.preventDefault()
        console.log("clicked button");
        finishTimer()
        moveToSelectedThing(name);
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