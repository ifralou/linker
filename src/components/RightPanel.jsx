import React from 'react';
import CurrentThing from "./CurrentThing/CurrentThing.jsx";
import CurrentDay from "./CurrentDay/CurrentDay.jsx";
import {panels} from "../hooks/useRightPanelState.js";

const RightPanel = ({currentPanel}) => {
    console.log(currentPanel)
    return (
        <div>
            {currentPanel === panels.selectedThing &&
                <CurrentThing thing={currentPanel.thing}/>
            }
            {currentPanel.panel === panels.selectedDay &&
                <CurrentDay day={currentPanel.day}/>
            }
        </div>
    );
};

export default RightPanel;