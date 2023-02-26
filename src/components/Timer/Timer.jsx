import React, {useEffect, useState} from 'react';
import {getCurrentTime, getHours, getMinutes, getSeconds} from "../../utils/time.js";

const Timer = () => {
    const [timer, setTimer] = useState({
        start: getCurrentTime(),
        end: getCurrentTime(),
    })

    useEffect(() => {
        let stamp = setInterval(() => {
            setTimer(prev => ({...prev, end: getCurrentTime()}))
            console.log("Interval")
        }, 1000)

        return () => { clearInterval(stamp) }
    }, [])


    return (
        <div>
            {`${getHours(timer)}:${getMinutes(timer)}:${getSeconds(timer)}`}
        </div>
    );
};

export default Timer;