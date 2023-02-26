import React from 'react';

const CalendarTile = ({dayIndex, dayData}) => {
    return (
        <div className={"calendar-cell"} key={dayIndex}>
            <h2>{dayData.date()}</h2>
        </div>
    );
};

export default CalendarTile;