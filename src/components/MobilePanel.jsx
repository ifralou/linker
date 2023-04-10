import React from 'react';
import CurrentThing from "./CurrentThing/CurrentThing.jsx";
import CurrentDay from "./CurrentDay/CurrentDay.jsx";
import {panels} from "../customReact/hooks/useRightPanelState.js";
import TimerPanel from "./TimerPanel/TimerPanel.jsx";
import WelcomePane from "./WelcomePane/WelcomePane.jsx";
import AddThingForm from "./Dispatcher/AddThingForm.jsx";
import {useApplicationContext} from "../customReact/contexts/AppFuncContext.jsx";

const MobilePanel = () => {

    const {
        panesContext: {
            currentPanel
        },
        thingsContext: {
            things
        },
        activitiesContext: {
            activities
        }
    } = useApplicationContext();

    return (
        <div className='info-panel maximize'>
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
            {currentPanel.panel === panels.timer &&
                <TimerPanel/>
            }
            {currentPanel.panel === panels.description &&
                <WelcomePane/>
            }
            {currentPanel.panel === panels.newThing && <div>
                <AddThingForm/>
            </div>}
        </div>
    );
};

export default MobilePanel;