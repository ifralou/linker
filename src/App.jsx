import './App.css'
import Things from "./components/Things/Things.jsx";
import Dispatcher from "./components/Dispatcher/Dispatcher.jsx";
import Calendar from "./components/Calendar/Calendar.jsx";
import useActivities from "./hooks/useActivities.js";
import useRightPanelState, {panels} from "./hooks/useRightPanelState.js";
import useThings from "./hooks/useThings.js";
import CurrentThing from "./components/CurrentThing/CurrentThing.jsx";
import CurrentDay from "./components/CurrentDay/CurrentDay.jsx";
import useTimer from "./hooks/useTimer.js";

function App() {

    const [things, {addNewThing, addLinkToThing}] = useThings();
    const [activities, addNewActivity] = useActivities();
    const [currentPanel, {moveToSelectedThing, moveToSelectedDay, moveToDescription}] = useRightPanelState();
    const [startTimer, updateTimer, finishTimer] = useTimer(() => {
       addNewActivity()
    });

    return (
        <main className="App">
            <Dispatcher addNewThing={addNewThing}/>
            <section className="main-grid">
                <Things
                    things={things}
                    addLinkToThing={addLinkToThing}
                    displayThing={moveToSelectedThing}
                    clickAction={moveToSelectedThing}
                />

                <Calendar
                    activitis={activities}
                    clickAction={moveToSelectedDay}
                />

                <div>
                    {currentPanel.panel === panels.selectedThing &&
                        <CurrentThing
                            thing={things.filter(t => t.name === currentPanel.thingName)[0]}
                        />
                    }
                    {currentPanel.panel === panels.selectedDay &&
                        <CurrentDay
                            name={currentPanel.dayName}
                            day={activities[currentPanel.dayName]}
                        />
                    }
                </div>
            </section>
        </main>
    )
}

export default App
