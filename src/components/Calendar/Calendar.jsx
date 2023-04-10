import React, {useContext, useState} from 'react';
import {calendar, dateToString, monthNames} from "../../utils/time.js";
import CalendarTile from "./CalendarTile.jsx";
import {AppFuncContext} from "../../customReact/contexts/AppFuncContext.jsx";
import CardWrapper from "../ChakraUICutomes/CardWrapper.jsx";
import {Box, CardBody, CardFooter, CardHeader, Flex, Heading, HStack, IconButton, VStack} from "@chakra-ui/react";
import {BsChevronLeft, BsChevronRight} from "react-icons/all.js";
import ApperanceAnimation from "../../customReact/contexts/ApperanceAnimation.jsx";
import {stringToColour} from "../../utils/color.js";

const Calendar = ({clickAction}) => {
    //[activities]
    const [currentHoveredDate, setCurrentHoveredDate] = useState(null);

    const {
        activitiesContext: {
            activities
        },
        panesContext: {
            moveToSelectedDay
        }
    } = useContext(AppFuncContext);

    const dayNames = [
        "M", "T", "W", "T", "F", "S", "S"
    ]
    const [monthCalendar, setMonthCalendar] = useState(calendar());

    const toNextMonth = () => setMonthCalendar(current => current.next())
    const toPreviousMonth = () => setMonthCalendar(current => current.prev())

    const backToActualMonth = () => setMonthCalendar(calendar())

    const monthButton = (direction) =>
        <IconButton
            aria-label={`Show ${direction === "back" ? "previous" : "next"} month.`}
            icon={direction === "back" ? <BsChevronLeft/> : <BsChevronRight/>}
            onClick={direction === "back" ? toPreviousMonth : toNextMonth}
        />


    return (
        <CardWrapper color="#ADD8E6">
            <CardHeader>
                <Flex align="center" justify="space-between">
                    {monthButton("back")}

                    <Heading as="h2" size="md" onClick={backToActualMonth}>
                        {`${monthNames[monthCalendar.month]}, ${monthCalendar.year}`}
                    </Heading>

                    {monthButton("next")}
                </Flex>
            </CardHeader>

            <CardBody py="0">
                <HStack justify="space-around">
                    {dayNames.map((dayName, i) => <Box key={i}>{dayName}</Box>)}
                </HStack>

                {monthCalendar.calendarMap().map((week, i) =>
                    <HStack justify="space-between" key={i}>
                        {
                            week.map((d, j) =>
                                <CalendarTile key={j}
                                              dayData={d}
                                              dayIndex={j}
                                              currentMonth={monthCalendar.month}
                                              activities={activities[dateToString(d)]}
                                              clickAction={moveToSelectedDay}
                                              hoverHandler={setCurrentHoveredDate}
                                />)
                        }
                    </HStack>
                )}
            </CardBody>

            <CardFooter height="10px">
                <ApperanceAnimation>
                    {currentHoveredDate &&
                        <HStack>
                            {
                                currentHoveredDate.map((act, i) =>
                                    <Box key={i}
                                         className="calendar-activities-circle"
                                         style={{backgroundColor: stringToColour(act.name)}}
                                    ></Box>
                                )
                            }
                        </HStack>
                    }
                </ApperanceAnimation>
            </CardFooter>

        </CardWrapper>
    );
};

export default Calendar;