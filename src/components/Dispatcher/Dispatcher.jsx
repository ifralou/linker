import React, {useState} from 'react';
import {actions} from "../../utils/reducer.js";

const Dispatcher = ({dispatch}) => {
    const [show, setShow] = useState(true);

    const [thing, setThing] = useState({
        name: "", description: "", links: []
    })

    let handleCurrentThingName = (e) => setThing(prev => ({
            ...prev, name: e.target.value
    }))

    let handleCurrentDescription = (e) => setThing(prev => ({
            ...prev, description: e.target.value
    }))

    let handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: actions.addThing, payload: thing
        })
        setThing({name: "", description: "", links: []})
    }

    return (
        <aside className={show && "aside-shown"}>
            <form onSubmit={handleSubmit}>

                <input type="text"
                       value={thing.name}
                       onChange={handleCurrentThingName}
                       placeholder={"New thing"}
                       onFocus={() => setShow(true)}
                />


                <input type="text"
                       value={thing.description}
                       onChange={handleCurrentDescription}
                       placeholder={"Description of the thing"}
                />

                <input type="submit"
                       value="Submit"
                />

            </form>
            <div
                className="aside-visual"
                onClick={() => setShow(p => !p)}
            ></div>
        </aside>
    );
};

export default Dispatcher;