import React from 'react';
import {Card, chakra} from "@chakra-ui/react";

const CardWrapper = ({children, color}) => {
    const CardWrapper = chakra(Card, {
        baseStyle: {
            backgroundColor: color,
            borderRadius: "15px",
            height: "100%"
        }
    })
    return (
        <CardWrapper>
            {children}
        </CardWrapper>
    );
};

export default CardWrapper;