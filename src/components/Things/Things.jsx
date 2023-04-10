import React, {useContext} from 'react';
import Thing from "./Thing.jsx";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {AppFuncContext, useApplicationContext} from "../../customReact/contexts/AppFuncContext.jsx";
import {Grid, GridItem} from "@chakra-ui/react";

const Things = () => {
    const {
        thingsContext: {
            things,
            addLinkToThing
        },
        panesContext: {
            moveToSelectedThing
        }
    } = useApplicationContext();

    const clickHandler = (e, name) => {
        e.preventDefault();
        moveToSelectedThing(name);
    }

    return (
        <section className={"things-wrapper"}>
            <DndProvider backend={HTML5Backend}>
                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                    {things.length === 0 ?
                        <p>No items here</p> :
                        things.map((thingData, i) =>
                            <GridItem key={i} onClick={(e) => { clickHandler(e, thingData.name) }}>
                                <Thing thingData={thingData} addLink={addLinkToThing} clickAction={moveToSelectedThing}/>
                            </GridItem>)
                    }
                </Grid>
            </DndProvider>
        </section>
    );
};

export default Things;