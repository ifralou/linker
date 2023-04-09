import React, {useState} from 'react';
import {useDrop} from "react-dnd";
import {NativeTypes} from "react-dnd-html5-backend"
import {motion} from "framer-motion";


const Thing = ({thingData, addLink, clickAction}) => {
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
    });

    const [hovered, setHovered] = useState(false);

    const actionOnEnter = (e) => {
        if (e.key === "Enter")
            e.target.click()
    }

    const clickHandler = (e) => {
        e.preventDefault();
        clickAction(name);
    }

    const mainTransition = {
        rest: {
            backgroundColor: "#FFFFFF",
            transition: {
                duration: 0.2,
                type: "tween",
            }
        },
        hover: {
            backgroundColor: color,
            transition: {
                duration: 0.05,
                type: "tween",
            }
        }
    }

    const additionalTransition = {
        rest: {
            backgroundColor: color,
            transition: {
                duration: 0.2,
                type: "tween",
            }
        },
        hover: {
            backgroundColor: "#FFFFFF",
            transition: {
                duration: 0.05,
                type: "tween",
            }
        }
    }

    const textTransition = {
        rest: {},
        hover: {
            color: "#FFF",
            transition: {
                duration: 0.05,
                type: "tween"
            }
        }
    }

    return (
        <li
            ref={drop}
            tabIndex={0}
            onClick={clickHandler}
            onKeyDown={actionOnEnter}
            className={"thing-dnd"}
        >
            <motion.div
                className={"thing-wrapper"}
                initial="rest"
                whileHover="hover"
                animate="rest"
            >

                <motion.div
                    className={"thing-content"}
                    variants={mainTransition}
                >
                    <motion.h2
                        variants={textTransition}
                    >{name}</motion.h2>
                </motion.div>

                <motion.div
                    className={"thing-color-tile"}
                    variants={additionalTransition}
                ></motion.div>

            </motion.div>
        </li>
    )
};

export default Thing;