import React from 'react';
import {CardBody, CardHeader, Heading } from "@chakra-ui/react";
import CardWrapper from "./ChakraUICutomes/CardWrapper.jsx";
import SessionDetails from "./WelcomePane/SessionDetails.jsx";


const SessionInfo = () => {

    return (
        <CardWrapper>
            <CardHeader>
                <Heading size="sm">Session:</Heading>
            </CardHeader>
            <CardBody>
                <SessionDetails/>
            </CardBody>
        </CardWrapper>
    );
};

export default SessionInfo;