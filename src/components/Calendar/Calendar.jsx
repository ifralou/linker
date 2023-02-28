import React, {useState} from 'react';
import {calendar, monthNames} from "../../utils/time.js";
import CalendarTile from "./CalendarTile.jsx";

const Calendar = () => {
    const dayNames = [
        "M", "T", "W", "T", "F", "S", "S"
    ]
    const [monthCalendar, setMonthCalendar] = useState(calendar());

    const toNextMonth = () => setMonthCalendar(current => current.next())
    const toPreviousMonth = () => setMonthCalendar(current => current.prev())

    const backToActualMonth = () => setMonthCalendar(calendar())

    return (
        <div className={"info-wrapper"}>
            <div>
                <button onClick={toPreviousMonth}>prev</button>

                <h2 onClick={backToActualMonth} className={"info-header"}>{
                    `${monthNames[monthCalendar.month]}, ${monthCalendar.year}`
                }</h2>

                <button onClick={toNextMonth}>next</button>
            </div>
            <div>
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
                        />)}
                    </div>
                )}
            </div>

        </div>
    );
};

export default Calendar;