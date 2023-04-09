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
import AddThingForm from "./components/Dispatcher/AddThingForm.jsx";

function App() {

    const [things, {addNewThing, addLinkToThing}] = useThings();

    const [activities, addNewActivity] = useActivities();

    const [currentPanel, {moveToSelectedThing, moveToSelectedDay, moveToTimer, moveToDescription, moveToNewThing}] = useRightPanelState();

    const [timer, startTimer, finishTimer, isActive] = useTimer(({name, start, end}) => {
        console.log(name, start, end);
        addNewActivity(dateToString(start), name, start, end);
    }, 1000);

    console.log(activities)

    return (
        <main>
            <Dispatcher 
                addNewThing={addNewThing}
                moveToDescription={moveToDescription}
                moveToNewThing={moveToNewThing}
            />
            <section className={"panel-main"}>

                {/* Panel dispatch */}
                <div className='info-panel maximize'>
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
                    {currentPanel.panel === panels.description &&
                        <div className='welcome-pannel'>
                            <h2>Hi there!</h2>
                            <h3>Welcome to the linker app!</h3>

                            <p>
                                On you upper right you could see calendar.
                                All you activities on different tasks are shows there.
                            </p>

                            <p>
                                Under calendar there are your tasks. You could drag and drog
                                links from you url bar to save them to the appropriate task.
                            </p>

                            <p>
                                If you want to add a task click big circle on the left.
                            </p>

                            <p>
                              To get back to the description just click on the Linker MK.I
                            </p>

                            <h4>Enjoy!</h4>
                        
                        </div>
                    }
                    {currentPanel.panel === panels.newThing && <div>
                        <AddThingForm addNewThing={addNewThing}/>
                    </div>}
                </div>

                <Calendar
                    activitis={activities}
                    clickAction={moveToSelectedDay}
                />

                <Things
                    things={things}
                    addLinkToThing={addLinkToThing}
                    displayThing={moveToSelectedThing}
                    clickAction={moveToSelectedThing}
                />
                
            </section>
        </main>
    )
}

export default App
