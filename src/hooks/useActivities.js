import {useState} from "react";

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
    const [activities, setActivities] = useState({
        "2.3.2023" : [{
            name: "Test",
            from: "13:30",
            to: "14:00"
        }]
    })


    const addNewActivity = (date, name, from, to) =>
        setActivities( prev => {
            return {
                ...prev,
                date: [...prev[date], {name: name, from: from, to:to}]
            }
        });

    return [activities, addNewActivity]
}