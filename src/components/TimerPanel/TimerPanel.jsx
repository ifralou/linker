import React from 'react';
import {timerToString} from "../../customReact/hooks/useTimer.js";
import {useApplicationContext} from "../../customReact/contexts/AppFuncContext.jsx";
import CardWrapper from "../ChakraUICutomes/CardWrapper.jsx";
import {Card, CardHeader, Heading} from "@chakra-ui/react";

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
        finishTimer()
        moveToSelectedThing(name);
    }

    return (
        <Card borderRadius="15px" height="100%" backgroundColor="white">
            <CardHeader>
                <Heading>{name}</Heading>
            </CardHeader>
            <div
                className={"timer-planet-wrapper"}
                onClick={action}
            >
                <div className={"planet"}>
                    <div>{timer.name !== "" && timerToString(timer)}</div>
                </div>
                <div className={"moon"}></div>
            </div>
        </Card>
    );
};

export default TimerPanel;