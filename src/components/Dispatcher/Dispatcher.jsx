import React, {useContext, useEffect, useRef, useState} from 'react';
import {IoLogoIonic} from "react-icons/io";
import {MdAddTask} from "react-icons/md";
import AddThingForm from "./AddThingForm.jsx";
import {createPortal} from "react-dom";
import Menu from "./Menu.jsx";
import {motion} from "framer-motion";
import {AppFuncContext} from "../../customReact/contexts/AppFuncContext.jsx";
import {Heading} from "@chakra-ui/react";

const Dispatcher = () => {
    const {
        panesContext: {
            moveToDescription,
            moveToNewThing
        },
    } = useContext(AppFuncContext);

    return (
        <aside>
            <Heading
                onClick={moveToDescription}
                as="h1" size="3xl" pt="5"
                cursor="pointer"
            >
                Linker MK.I
            </Heading>

            <div className={"row center"}>
                <motion.div
                    initial={{rotate: 0}}
                    whileHover={{rotate: 270, cursor: "pointer"}}
                    onClick={moveToNewThing}
                >
                    <IoLogoIonic size={200} className={"visual-adjust"}/>
                </motion.div>
            </div>
        </aside>
    );
};

export default Dispatcher;