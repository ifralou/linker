import React from 'react';
import Thing from "./Thing.jsx";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const Things = ({things, addLink}) => {

    return (
        <section>
            <DndProvider backend={HTML5Backend}>
                <ul>
                    {things.length === 0 ?
                        <p>No items here</p> :
                        things.map((thingData, i) => <Thing key={i} thingData={thingData} addLink={addLink}/>)
                    }
                </ul>
            </DndProvider>
        </section>
    );
};

export default Things;