import React, {useState} from 'react';
import {getCurrentMonthMap} from "../../utils/time.js";
import CalendarTile from "./CalendarTile.jsx";

const Calendar = () => {
    const dayNames = [
        "M", "T", "W", "T", "F", "S", "S"
    ]
    const [month, setMonth] = useState(
        getCurrentMonthMap()
    )

    return (
        <div className={"info-wrapper"}>
            <h2 className={"info-header"}>{month.name}</h2>
            <div>
                <div className={"week"}>
                    {dayNames.map((dayName, i) =>
                        <div className={"calendar-cell-name"}>
                            {dayName}
                        </div>)
                    }
                </div>
                {month.days.map((week, i) =>
                    <div className={"week"} key={i}>
                        {week.map((d, j) => <CalendarTile dayData={d} dayIndex={j}/>)}
                    </div>
                )}
            </div>

        </div>
    );
};

export default Calendar;