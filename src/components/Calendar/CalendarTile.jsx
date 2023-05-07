import React from 'react';
import {dateToString} from "../../utils/time.js";
import {Center, Heading} from "@chakra-ui/react";

const CalendarTile = ({dayIndex, dayData, currentMonth, activities, clickAction, hoverHandler}) => {
    const actsLenght = activities ? activities.length : 0;
    const size =  Number(actsLenght ?? 0) * 3;
    console.log(actsLenght)
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

            <Center
                position="absolute"
                backgroundColor="#DABDA9"
                borderRadius="50%"
                width={size + "px"}
                height={size + "px"}
                zIndex="0"
            ></Center>
        </Center>
    );
};

export default CalendarTile;