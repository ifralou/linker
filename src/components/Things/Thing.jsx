import React, {useState} from 'react';
import {DndProvider, useDrop} from "react-dnd";
import {NativeTypes} from "react-dnd-html5-backend"


const Thing = ({name, description, links, addLink}) => {
    const [result, drop] = useDrop({
        accept: NativeTypes.HTML,
        drop: (item) => {
            item.dataTransfer.items[1].getAsString(
                (linkData) => {
                    let data = linkData.split("\n")
                    addLink(name, {title: data[1], url: data[0]})
                }
            )
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })
    })

    return (
        <li ref={drop} className={result.isOver ? "hoveredLink" : ""}>
            <h3>{name}</h3>
            <p>{description}</p>
        </li>
    )
};

export default Thing;