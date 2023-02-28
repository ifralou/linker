import React from 'react';

const CalendarTile = ({dayIndex, dayData, currentMonth}) => {
    return (
        <div className={`calendar-cell ${dayData.month() === currentMonth? "" : "calendar-darker-day"}`} key={dayIndex}>
            <h2>{dayData.date()}</h2>
        </div>
    );
};

export default CalendarTile;