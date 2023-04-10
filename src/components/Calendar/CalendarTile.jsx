import React from 'react';
import {stringToColour} from "../../utils/color.js";
import {dateToString} from "../../utils/time.js";
import {Box, Center, Heading} from "@chakra-ui/react";

const CalendarTile = ({dayIndex, dayData, currentMonth, activities, clickAction, hoverHandler}) => {
    const size =  (activities ? activities.length : 0) * 7;
    return (
        <Center onClick={(e) => {
            e.preventDefault();
            clickAction(dateToString(dayData));
        }}
             className={`calendar-cell ${dayData.month() === currentMonth ? "" : "calendar-darker-day"}`}
             key={dayIndex}
                position="relative"
                py={3}
             onMouseEnter={() => hoverHandler(activities)}
             onMouseLeave={() => hoverHandler(null)}
        >
            <Heading zIndex="10" size={30} p={0} m={0} className={"calendar-tile-date"}>{dayData.date()}</Heading>

            <Box
                position="absolute"
                backgroundColor="#DABDA9"
                borderRadius="50%"
                width={size}
                height={size}
                zIndex="0"
            ></Box>
        </Center>
    );
};

export default CalendarTile;