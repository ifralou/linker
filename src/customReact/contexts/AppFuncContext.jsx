import React, {createContext, useContext} from "react";
import useThings from "../hooks/useThings.js";
import useActivities from "../hooks/useActivities.js";
import useRightPanelState from "../hooks/useRightPanelState.js";
import useTimer from "../hooks/useTimer.js";
import {dateToString} from "../../utils/time.js";
import fetchIPInfo from "../../utils/fetchIPInfo.js";

export const AppFuncContext = createContext();

export const useApplicationContext = () => useContext(AppFuncContext);

export const AppFuncProvider = ({children}) => {

    /**
     * Thing is an official name for a task.
     * Task have name, description and list of web links related to it.
     */
    const [things, {addNewThing, addLinkToThing}] = useThings();

    /**
     * Activities tracked records of a particular task
     */
    const [activities, addNewActivity] = useActivities();

    /**
     * Switcher to move to a particular pane.
     */
    const [currentPanel, {
        moveToSelectedThing,
        moveToSelectedDay,
        moveToTimer,
        moveToDescription,
        moveToNewThing
    }] = useRightPanelState();

    /**
     * Custom hook implemented for timer.
     * Timer tracks down time spend on a particular task.
     */
    const [timer, startTimer, finishTimer, isActive, getRunningTask] = useTimer(({name, start, end}) => {
        addNewActivity(dateToString(start), name, start, end);
    }, 1000);


    /**
     * Nicely packed functions to change state of an application.
     */
    const value = {
        thingsContext: {
            things: things,
            addNewThing: addNewThing,
            addLinkToThing: addLinkToThing
        },
        panesContext: {
            currentPanel,
            moveToSelectedThing,
            moveToSelectedDay,
            moveToTimer,
            moveToDescription,
            moveToNewThing
        },
        timerContext: {
            timer,
            startTimer,
            finishTimer,
            isActive,
            getRunningTask
        },
        activitiesContext: {
            activities,
            addNewActivity
        }
    }

    return <AppFuncContext.Provider value={value}>
        {children}
    </AppFuncContext.Provider>
}