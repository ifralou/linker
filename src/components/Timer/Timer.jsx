import React, {useEffect, useState} from 'react';
import {getCurrentTime, getHours, getMinutes, getSeconds} from "../../utils/time.js";

//updateTimer(name, end, diff);
//startTimer(name, start);
//endTImer(name

const Timer = ({thingName, finish}) => {

    const [running, setRunning] = useState(false);
    const [timer, setTimer] = useState({
        start: getCurrentTime(),
        end: getCurrentTime(),
    })

    useEffect(() => {
        let stamp = setInterval(() => {
            setTimer(prev => ({...prev, end: getCurrentTime()}))
        }, 1000)

        return () => { clearInterval(stamp) }
    }, [])

    const endTimer = () => {
        setRunning(r => !r);
        finish(thingName, timer);

    }


    return (
        <div onClick={endTimer}
             className={`timer-base ${running ? "timer-running" : "timer-ended"}`}
        >
            <p>{thingName}: </p>
            <p>{`${getHours(timer)}:${getMinutes(timer)}:${getSeconds(timer)}`}</p>
        </div>
    );
};

export default Timer;