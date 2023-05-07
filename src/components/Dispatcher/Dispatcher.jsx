import React, {useContext } from 'react';
import {IoLogoIonic} from "react-icons/io";
import {motion} from "framer-motion";
import {AppFuncContext} from "../../customReact/contexts/AppFuncContext.jsx";
import {Heading } from "@chakra-ui/react";
import SessionInfo from "../SessionInfo.jsx";
import {GiPlainCircle} from "react-icons/all.js";

const Dispatcher = () => {
    const {
        panesContext: {
            moveToDescription,
            moveToNewThing
        },
        timerContext: {
            isActive
        }
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
                    {isActive() ?
                        <GiPlainCircle size={200} className={"visual-adjust"}/> :
                        <IoLogoIonic size={200} className={"visual-adjust "}/>
                    }
                </motion.div>
            </div>

            <SessionInfo/>
        </aside>
    );
};

export default Dispatcher;