import React, {useEffect, useState} from 'react';
import {Center, List, ListIcon, ListItem, Spinner} from "@chakra-ui/react";
import fetchIPInfo from "../../utils/fetchIPInfo.js";
import {BiWorld, BsCashCoin, BsPostage, FaAddressCard, GrOrganization} from "react-icons/all.js";


const SessionField = ({icon, info}) =>
    <ListItem>
        <ListIcon as={icon}/>{info}
    </ListItem>;
const Error = () =>
    <ListItem>
        Error occurred while fetching. You may be offline.
    </ListItem>

const SessionDetails = () => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetchIPInfo()
            .then((res) => setInfo(res))
            .catch(() => setInfo("error"))
    }, []);


    if(info === "error") {
        return <Center><List><Error/></List></Center>
    }

    return (
            <Center>
                {
                    info ?
                        <List spacing={2}>
                            <SessionField icon={FaAddressCard} info={`${info.version}/${info.ip}`}/>
                            <SessionField icon={BiWorld} info={`${info.continent_code} / ${info.country} / ${info.city}`}/>
                            <SessionField icon={BsPostage} info={info.postal}/>
                            <SessionField icon={BsCashCoin} info={info.currency}/>
                            <SessionField icon={GrOrganization} info={info.org}/>
                        </List> :
                        <Spinner/>
                }
            </Center>
    );
};

export default SessionDetails;