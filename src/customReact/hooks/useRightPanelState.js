import {useState} from "react";

export const panels = {
    timer: 1,
    selectedThing: 2,
    selectedDay: 3,
    description: 4,
    newThing: 5
}
export default function useRightPanelState() {
    const [currentPanel, setCurrentPanel] = useState({ panel: panels.description });

    const moveToSelectedThing = (name) => setCurrentPanel({
        panel : panels.selectedThing,
        thingName : name
    });
    const moveToSelectedDay = (dayName) => setCurrentPanel({
        panel: panels.selectedDay,
        dayName: dayName
    })

    const moveToTimer = () => setCurrentPanel({ panel : panels.timer })

    const moveToDescription = () => setCurrentPanel({panel: panels.description})

    const moveToNewThing = () => setCurrentPanel({panel: panels.newThing});

    return [currentPanel, {moveToSelectedThing, moveToSelectedDay, moveToTimer, moveToDescription, moveToNewThing}]
}