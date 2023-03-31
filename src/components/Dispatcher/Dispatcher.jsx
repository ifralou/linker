import React, {useEffect, useRef, useState} from 'react';
import {IoLogoIonic} from "react-icons/io";
import {MdAddTask} from "react-icons/md";
import AddThingForm from "./AddThingForm.jsx";
import {createPortal} from "react-dom";
import Menu from "./Menu.jsx";
import {motion} from "framer-motion";

const Dispatcher = ({addNewThing, moveToDescription}) => {

    return (
        <aside>
            <div className={"row"}>
                <h1 onClick={moveToDescription} className={"logo-text"}>Linker MK.I</h1>
            </div>

            <div className={"row center"}>
                <motion.div
                    initial={{rotate: 0 }}
                    whileHover={{rotate: 270, cursor: "pointer"}}
                >
                    <IoLogoIonic size={200} className={"visual-adjust"}/>
                </motion.div>
            </div>

            <Menu/>

        </aside>
    );
};

export default Dispatcher;