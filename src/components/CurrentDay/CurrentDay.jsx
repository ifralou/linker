import React from 'react';

const CurrentDay = ({name, day}) => {
    return (
        <>
            <h1>{name}</h1>
            <ul className={"current-day-timeline"}>
                {day ?
                    day.map((a, i) => <div key={i} className={"current-day-activity"}>
                        {JSON.stringify(a)}
                    </div>) :
                    <p>No activities for today</p>
                }
            </ul>
        </>
    );
};

export default CurrentDay;