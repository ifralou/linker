import {useState} from "react";

export const panels = {
    description: 1,
    selectedThing: 2,
    selectedDay: 3
}
export default function useRightPanelState() {
    const [currentPanel, setCurrentPanel] = useState({ panel: panels.description });

    const moveToSelectedThing = (name) => setCurrentPanel({
        panel : panels.selectedThing,
        thingName : name
    });
    const moveToSelectedDay = (day) => setCurrentPanel({
        panel: panels.selectedDay,
        day: day
    })

    const moveToDescription = () => setCurrentPanel({ panel : panels.description})

    return [currentPanel, {moveToSelectedThing, moveToSelectedDay, moveToDescription}]
}