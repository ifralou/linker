import React, {useState} from 'react';
import {getCurrentMonthMap} from "../../utils/time.js";

const Calendar = () => {
    const [month, setMonth] = useState(
        getCurrentMonthMap()
    )

    return (
        <div>
            <h3>{month.name}</h3>
            <div>
                {
                    month.days.map((week, i) =>
                        <div className={"week"} key={i}>
                            {week.map((d, j) =>
                                <div className={"calendar-cell"} key={j}>{d.date()}</div>)
                            }
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Calendar;