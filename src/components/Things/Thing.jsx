import React from 'react';
import {useDrop} from "react-dnd";
import {NativeTypes} from "react-dnd-html5-backend"


const Thing = ({thingData, addLink}) => {
    const {name, description, color} = thingData;

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
            <div className={"thing-content"}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div
                className={"thing-color-tile"}
                style={{backgroundColor: color}}
            ></div>
        </li>
    )
};

export default Thing;