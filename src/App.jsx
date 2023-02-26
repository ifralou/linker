import { useReducer, useState} from 'react'
import './App.css'
import Things from "./components/Things/Things.jsx";
import Dispatcher from "./components/Dispatcher/Dispatcher.jsx";
import {linkerReducer} from "./utils/reducer.js";
import Calendar from "./components/Calendar/Calendar.jsx";
import CurrentDay from "./components/CurrentDay/CurrentDay.jsx";
import CurrentThing from "./components/CurrentThing/CurrentThing.jsx";

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

    const getCurrentThing = (name) =>
       things.filter(t => t.name === name)[0]

    const [rightSidePanel, setRightSidePanel] = useState({
        type: rightSideState.thing,
        name: "Test"
    });

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
