import './App.css'
import Things from "./components/Things/Things.jsx";
import Dispatcher from "./components/Dispatcher/Dispatcher.jsx";
import Calendar from "./components/Calendar/Calendar.jsx";
import useActivities from "./hooks/useActivities.js";
import useRightPanelState from "./hooks/useRightPanelState.js";
import RightPanel from "./components/RightPanel.jsx";
import useThings from "./hooks/useThings.js";

const rightSideState = {
    thing: "thing",
    day: "day"
}

function App() {

    const [things, {addNewThing, addLinkToThing}] = useThings();
    const [activities, addNewActivity] = useActivities();
    const [currentPanel, {moveToSelectedThing, moveToSelectedDay, moveToDescription}] = useRightPanelState();

    return (
        <main className="App">
            <Dispatcher addNewThing={addNewThing}/>
            <section className="main-grid">
                <Things
                    things={things}
                    addLinkToThing={addLinkToThing}
                    displayThing={moveToSelectedThing}
                />

                <Calendar
                    activitis={activities}
                    dispalyDay={moveToSelectedDay}
                />

                <RightPanel
                    currentPanel={currentPanel}
                />
            </section>
        </main>
    )
}

export default App
