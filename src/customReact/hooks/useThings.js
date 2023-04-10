import {useEffect, useState} from "react";
import {stringToColour} from "../../utils/color.js";
import {thingsDB} from "../../persistence/ThingsPersistence.js";

export default function useThings() {

    const [things, setThings] = useState([]);

    useEffect(() => {
        thingsDB.persistedThings.toArray().then(things => setThings(things))
    }, []);

    const addNewThing = (thing) => {
        let newThing = {...thing, color: stringToColour(thing.name)}
        thingsDB.persistedThings.add(newThing);
        setThings(prev => [...prev, newThing]);
    };

    const addLinkToThing = (name, link) => {
        let index = things.findIndex(item => item.name === name);
        let item = things[index]

        if (item.links.map(l => l.url).includes(link.url))
            return;

        let addedLink = {
            name: item.name,
            description: item.description,
            links: [...item.links, link],
            color: stringToColour(item.name)
        }

        thingsDB.persistedThings.update(item.id, addedLink);
        setThings(prev => [
            ...prev.slice(0, index), addedLink,...prev.slice(index + 1, prev.length)
        ]);

    }

    return [things, {addNewThing, addLinkToThing}]
}