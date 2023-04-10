import React from 'react';
import {Card, chakra} from "@chakra-ui/react";
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";
import ApperanceAnimation from "../../customReact/contexts/ApperanceAnimation.jsx";

const CardWrapper = ({children, color}) => {
    const CardWrapper = chakra(Card, {
        baseStyle: {
            backgroundColor: color,
            borderRadius: "15px",
            height: "100%"
        }
    });

    return (
        <ApperanceAnimation>
            <CardWrapper>
                {children}
            </CardWrapper>
        </ApperanceAnimation>
    );
};

export default CardWrapper;