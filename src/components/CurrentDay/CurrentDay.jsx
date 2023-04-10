import React from 'react';
import CardWrapper from "../ChakraUICutomes/CardWrapper.jsx";
import {CardBody, CardHeader, Heading, List, ListIcon, ListItem, Stack, Text} from "@chakra-ui/react";
import {dateToString, getHours} from "../../utils/time.js";
import dayjs, {isDayjs} from "dayjs";

const CurrentDay = ({name, day}) => {
    const dispatchEmoji = (time) => time < 60000? "😅" : "😎";

    const getMillisDiff = (to, from) => to.$d.getTime() - from.$d.getTime();

    return (
        <CardWrapper>
            <CardHeader>
                <Heading>{name}</Heading>
            </CardHeader>
            <CardBody>
                <List spacing={2}>
                    {day ?
                        day.map((a, i) =>  {
                            const {name, from, to} = a;
                            console.log(getMillisDiff(to, from));
                            return <ListItem key={i}>
                                <Text>{dispatchEmoji(getMillisDiff(to, from))} {name}</Text>
                            </ListItem>;
                        }) : <p>No activities for today</p>
                    }
                </List>
            </CardBody>
        </CardWrapper>
    );
};

export default CurrentDay;