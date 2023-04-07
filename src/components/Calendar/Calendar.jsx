import React, {useState} from 'react';
import {calendar, dateToString, monthNames} from "../../utils/time.js";
import CalendarTile from "./CalendarTile.jsx";
import {AiFillLeftCircle, AiFillRightCircle} from "react-icons/ai";

const Calendar = ({activitis, clickAction}) => {
    const dayNames = [
        "M", "T", "W", "T", "F", "S", "S"
    ]
    const [monthCalendar, setMonthCalendar] = useState(calendar());

    const toNextMonth = () => setMonthCalendar(current => current.next())
    const toPreviousMonth = () => setMonthCalendar(current => current.prev())

    const backToActualMonth = () => setMonthCalendar(calendar())


    return (
        <div className={"info-wrapper"}>

            <div className={"month-name"}>
                <AiFillLeftCircle size={30} onClick={toPreviousMonth}/>

                <h2 onClick={backToActualMonth} className={"info-header"}>{
                    `${monthNames[monthCalendar.month]}, ${monthCalendar.year}`
                }</h2>

                <AiFillRightCircle size={30} onClick={toNextMonth}/>
            </div>

            <div className='calendar-wrapper'>

                <div className={"week"}>
                    {dayNames.map((dayName, i) =>
                        <div className={"calendar-cell-name"} key={i}>
                            {dayName}
                        </div>)
                    }
                </div>

                {monthCalendar.calendarMap().map((week, i) =>
                    <div className={"week"} key={i}>
                        {week.map((d, j) => <CalendarTile key={j}
                                                          dayData={d}
                                                          dayIndex={j}
                                                          currentMonth={monthCalendar.month}
                                                          activities={activitis[dateToString(d)]}
                                                          clickAction={clickAction}
                        />)}
                    </div>
                )}
            </div>

        </div>
    );
};

export default Calendar;