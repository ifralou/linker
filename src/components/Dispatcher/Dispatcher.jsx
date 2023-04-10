import React, {useContext, useEffect, useRef, useState} from 'react';
import {IoLogoIonic} from "react-icons/io";
import {motion} from "framer-motion";
import {AppFuncContext} from "../../customReact/contexts/AppFuncContext.jsx";
import {CardBody, CardHeader, Heading, Text} from "@chakra-ui/react";
import CardWrapper from "../ChakraUICutomes/CardWrapper.jsx";
import SessionInfo from "../SessionInfo.jsx";

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

            <SessionInfo/>
        </aside>
    );
};

export default Dispatcher;