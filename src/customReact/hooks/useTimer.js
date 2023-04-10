import { useRef, useState} from "react";
import {getCurrentTime, getHours, getMinutes, getSeconds} from "../../utils/time.js";

const initState = {
    name: "", start: "", end: ""
}

export const timerToString = (timer) => `${getHours(timer)}:${getMinutes(timer)}:${getSeconds(timer)}`

export default function useTimer(notifier, ms) {
    const [timer, setTimer] = useState(initState);
    const idRef = useRef(null);

    const startTimer = (name) => {
        if (timer.name === name) {
            return;
        }
        setTimer({
            name: name,
            start: getCurrentTime(),
            end: getCurrentTime(),
        });

        idRef.current = setInterval(updateTimer, ms);
    }

    const updateTimer = () => {
        setTimer(prev => ({...prev, end: getCurrentTime()}))
    }

    const finishTimer = () => {
        if(idRef.current) {
            clearInterval(idRef.current);
            idRef.current = null;
        }
        notifier(timer);
        setTimer(initState);
    }

    //const formattedTime = () => `${getHours(timer)}:${getMinutes(timer)}:${getSeconds(timer)}`;

    const isActive = () => !(timer.name === "" && timer.end === "" && timer.start === "");

    return [timer, startTimer, finishTimer, isActive]
}