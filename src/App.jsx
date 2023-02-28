import { useReducer, useState} from 'react'
import './App.css'
import Things from "./components/Things/Things.jsx";
import Dispatcher from "./components/Dispatcher/Dispatcher.jsx";
import {linkerReducer} from "./utils/reducer.js";
import Calendar from "./components/Calendar/Calendar.jsx";
import CurrentDay from "./components/CurrentDay/CurrentDay.jsx";
import CurrentThing from "./components/CurrentThing/CurrentThing.jsx";
import dayjs from "dayjs";

const rightSideState = {
    thing: "thing",
    day: "day"
}

function App() {

    const [things, dispatch] = useReducer(linkerReducer, [
        {
            name: "Test",
            description: "just to test something",
            links: []
        }
    ]);

    const [rightSidePanel, setRightSidePanel] = useState({
        type: rightSideState.thing,
        name: "Test"
    });

    const [activities, setActivities] = useState([
        {
            "25.02.2023": [
                {
                    name: "Test",
                    from: "10:30",
                    to: "12:30"
                }
            ]
        }
    ]);

    const ndegetCurrentThing = (name) =>
        things.filter(t => t.name === name)[0]


    return (
        <main className="App">
            <Dispatcher dispatch={dispatch}/>
            <section className="main-grid">
                <Things things={things} dispatch={dispatch}/>
                <Calendar/>
                <div>
                    {rightSidePanel.type === rightSideState.thing &&
                        <CurrentThing thing={getCurrentThing(rightSidePanel.name)}/>
                    }
                    {rightSidePanel.type === rightSideState.day &&
                        <CurrentDay/>
                    }
                </div>
            </section>
        </main>
    )
}

export default App
