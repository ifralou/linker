import {useEffect, useState} from "react";
import {datesDB} from "../../persistence/DatePersistance.js";

export default function useActivities() {
    /**
     * [
     *     "25.03:2028" : [
     *     {
     *         name: "Test",
     *         from: "13:50",
     *         to: "34:23"
     *     }
     * ]
     */
    const [activities, setActivities] = useState({})

    useEffect(() => {
        const mapping = Object.create(null);
        datesDB.persistedActivities.toArray().then(activities => {
            activities.forEach( ({date, name, from, to}) => {
                if(!mapping[date])
                    mapping[date] = [];
                mapping[date].push({name, from, to});
            })
            setActivities(mapping);
        });
    }, []);


    const addNewActivity = (date, name, from, to) => {
        datesDB.persistedActivities.add({date: date, name: name, from: from, to: to});
        setActivities( prev => {
            return {...prev, [date]: [...(prev[date] ?? []), {name: name, from: from, to:to}]}
        });
    }

    return [activities, addNewActivity]
}