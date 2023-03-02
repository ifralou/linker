import {useReducer} from "react";
import {actions, linkerReducer} from "../utils/reducer.js";
import {stringToColour} from "../utils/color.js";

export default function useThings() {
    const [things, dispatch] = useReducer(linkerReducer, [
        {
            name: "Test",
            description: "just to test something",
            links: [],
            color: stringToColour("        dispatch()Test")
        }
    ]);

    const addThing = (thing) => {
        dispatch({
            type: actions.addThing,
            payload: {
                ...thing,
                color: stringToColour(thing.name)
            }
        })
    };

    const addLinkToThing = (name, link) => {
        dispatch({
            type: actions.addLinkToThing,
            payload: {
                name:name,
                link: link
            }
        })
    }

    return [things, {addThing, addLinkToThing}]
}