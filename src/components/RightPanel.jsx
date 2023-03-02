import React from 'react';
import CurrentThing from "./CurrentThing/CurrentThing.jsx";
import CurrentDay from "./CurrentDay/CurrentDay.jsx";
import {panels} from "../hooks/useRightPanelState.js";

const RightPanel = ({currentPanel}) => {
    return (
        <div>
            {currentPanel.type === panels.selectedThing &&
                <CurrentThing thing={currentPanel.thing}/>
            }
            {currentPanel.type === panels.selectedDay &&
                <CurrentDay day={currentPanel.day}/>
            }
        </div>
    );
};

export default RigthPanel;