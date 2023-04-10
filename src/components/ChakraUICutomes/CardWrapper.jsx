import React from 'react';
import {Card, chakra} from "@chakra-ui/react";
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";

const CardWrapper = ({children, color}) => {
    const CardWrapper = chakra(Card, {
        baseStyle: {
            backgroundColor: color,
            borderRadius: "15px",
            height: "100%"
        }
    });

    return (
        <AnimatePresence>
            <motion.div
                key="pane"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <CardWrapper>
                    {children}
                </CardWrapper>
            </motion.div>
        </AnimatePresence>
    );
};

export default CardWrapper;