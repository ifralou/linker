import React from 'react';
import {stringToColour} from "../../utils/color.js";
import {dateToString} from "../../utils/time.js";

const CalendarTile = ({dayIndex, dayData, currentMonth, activities, clickAction}) => {
    return (
        <div onClick={(e) => {
            e.preventDefault();
            clickAction(dateToString(dayData));
        }} className={`calendar-cell ${dayData.month() === currentMonth ? "" : "calendar-darker-day"}`} key={dayIndex}>
            <h2 className={"calendar-tile-date"}>{dayData.date()}</h2>
            <div className={'calendar-activities-row'}>
                {
                    activities && activities.map((a, i) =>
                        <div key={i}
                             className={"calendar-activities-circle"}
                             style={{backgroundColor: stringToColour(a.name)}}
                        ></div>
                    )
                }
            </div>
        </div>
    );
};

export default CalendarTile;