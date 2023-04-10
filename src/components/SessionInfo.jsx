import React, {useEffect, useState} from 'react';
import {CardBody, CardHeader, Center, Flex, Heading, List, ListIcon, ListItem, Spinner, Text} from "@chakra-ui/react";
import CardWrapper from "./ChakraUICutomes/CardWrapper.jsx";
import fetchIPInfo from "../utils/fetchIPInfo.js";
import {BiWorld, BsCashCoin, BsPostage, FaAddressCard, GrOrganization} from "react-icons/all.js";

const SessionField = ({icon, info}) =>
    <ListItem>
        <ListIcon as={icon}/>{info}
    </ListItem>
const SessionInfo = () => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetchIPInfo().then((res) => setInfo(res))
    }, []);

    return (
        <CardWrapper>
            <CardHeader>
                <Heading size="sm">Session:</Heading>
            </CardHeader>
            <CardBody>
                <Center>
                    {
                        info ?
                            <List spacing={2}>
                                <SessionField icon={FaAddressCard} info={`${info.version}/${info.ip}`}/>
                                <SessionField icon={BiWorld} info={`${info.continent_code} / ${info.country} / ${info.city}`}/>
                                <SessionField icon={BsPostage} info={info.postal}/>
                                <SessionField icon={BsCashCoin} info={info.currency}/>
                                <SessionField icon={GrOrganization} info={info.org}/>
                                <SessionField icon={FaAddressCard} info={info.ip}/>
                            </List> :
                            <Spinner/>
                    }
                </Center>
            </CardBody>
        </CardWrapper>
    );
};

export default SessionInfo;