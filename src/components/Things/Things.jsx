import React from 'react';
import Thing from "./Thing.jsx";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const Things = ({things, addLinkToThing, clickAction}) => {

    return (
        <section className={"things-wrapper"}>
            <DndProvider backend={HTML5Backend}>
                <ul>
                    {things.length === 0 ?
                        <p>No items here</p> :
                        things.map((thingData, i) =>
                            <div  key={i} onClick={(e) => {
                                e.preventDefault();
                                clickAction(thingData.name)
                            }
                            }>
                                <Thing
                                    thingData={thingData}
                                    addLink={addLinkToThing}
                                    clickAction={clickAction}
                                />
                            </div>)
                    }
                </ul>
            </DndProvider>
        </section>
    );
};

export default Things;