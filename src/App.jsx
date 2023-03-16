import './App.css'
import Things from "./components/Things/Things.jsx";
import Dispatcher from "./components/Dispatcher/Dispatcher.jsx";
import Calendar from "./components/Calendar/Calendar.jsx";
import useActivities from "./hooks/useActivities.js";
import useRightPanelState, {panels} from "./hooks/useRightPanelState.js";
import useThings from "./hooks/useThings.js";
import CurrentThing from "./components/CurrentThing/CurrentThing.jsx";
import CurrentDay from "./components/CurrentDay/CurrentDay.jsx";
import TimerPanel from "./components/TimerPanel/TimerPanel.jsx";
import useTimer from "./hooks/useTimer.js";
import {dateToString} from "./utils/time.js";

function App() {

    const [things, {addNewThing, addLinkToThing}] = useThings();

    const [activities, addNewActivity] = useActivities();

    const [currentPanel, {moveToSelectedThing, moveToSelectedDay, moveToTimer}] = useRightPanelState();

    const [timer, startTimer, finishTimer, isActive] = useTimer(({name, start, end}) => {
        console.log(name, start, end);
        addNewActivity(dateToString(start), name, start, end);
    }, 1000);

    console.log(activities)

    return (
        <main>
            <Dispatcher addNewThing={addNewThing}/>
            <section className={"panel-main"}>

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

                {/* Panel dispatch */}
                <div>
                    {currentPanel.panel === panels.selectedThing &&
                        <CurrentThing
                            thing={things.filter(t => t.name === currentPanel.thingName)[0]}
                            startTimer={(name) => {
                                startTimer(name);
                                moveToTimer();
                            }}
                        />
                    }
                    {currentPanel.panel === panels.selectedDay &&
                        <CurrentDay
                            name={currentPanel.dayName}
                            day={activities[currentPanel.dayName]}
                        />
                    }
                    {currentPanel.panel === panels.timer &&
                        <TimerPanel
                            timer={timer}
                            finish={finishTimer}
                            backToThing={moveToSelectedThing}
                        />
                    }
                </div>
            </section>
        </main>
    )
}

export default App
