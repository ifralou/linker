import React, {useState} from 'react';
import Thing from "./Thing.jsx";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {actions} from "../../utils/reducer.js";

const Things = ({things, dispatch}) => {
    const addLinkToItem = (name, link) => {
       dispatch({
           type: actions.addLinkToThing,
           payload: {
               name:name,
               link: link
           }
       })
    }

    return (
        <section>
            <DndProvider backend={HTML5Backend}>
                <ul>
                    {things.length === 0 ?
                        <p>No items here</p> :
                        things.map((t, i) =>
                            <Thing
                                key={i}
                                name={t.name}
                                description={t.description}
                                links={t.links}
                                addLink={addLinkToItem}
                            />)
                    }
                </ul>
            </DndProvider>
        </section>
    );
};

export default Things;