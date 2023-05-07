import React, {useEffect, useState} from 'react';
import {Center, List, ListIcon, ListItem, Spinner} from "@chakra-ui/react";
import fetchIPInfo from "../../utils/fetchIPInfo.js";
import {BiWorld, BsCashCoin, BsPostage, FaAddressCard, GrOrganization} from "react-icons/all.js";
import {useQuery} from "react-query";


const SessionField = ({icon, info}) =>
    <ListItem>
        <ListIcon as={icon}/>{info}
    </ListItem>;
const Error = () =>
    <ListItem>
        Error occurred while fetching. You may be offline.
    </ListItem>

const SessionDetails = React.memo(() => {
    const response = useQuery(["session"], fetchIPInfo);

    if (response.isError) {
        return <Center><List><Error/></List></Center>
    }
    const info = response.data;

    return (
        <Center>
            {
                response.isLoading ?
                    <Spinner/> :
                    <List spacing={2}>
                        <SessionField icon={FaAddressCard} info={`${info.version}/${info.ip}`}/>
                        <SessionField icon={BiWorld} info={`${info.continent_code} / ${info.country} / ${info.city}`}/>
                        <SessionField icon={BsPostage} info={info.postal}/>
                        <SessionField icon={BsCashCoin} info={info.currency}/>
                        <SessionField icon={GrOrganization} info={info.org}/>
                    </List>
            }
        </Center>
    );
});

export default SessionDetails;