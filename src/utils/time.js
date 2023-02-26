import dayjs from "dayjs";
import wd from "dayjs/plugin/weekday"
import locale from "dayjs/locale/de";

dayjs.locale(locale)
dayjs.extend(wd)

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export function getCurrentTime() {
    return dayjs();
}

export const getFormattedDifference = ({start,
                                           end
                                       }) => `${Math.floor(end.diff(start, "hour", true))}:${Math.floor(end.diff(start, "minute", true))}:${Math.floor(end.diff(start, "second", true))}`;


const zeroPad = (num) => (0 <= num && num <= 9) ? '0' + num : num;
const getDifferenceWithArg = (start, end, arg, pad) => {
    let res = Math.floor(end.diff(start, arg, true)) % 60;
    if(pad) {
        return zeroPad(res);
    }
    return res;
}

export const getHours = ({start, end}) => getDifferenceWithArg(start, end, 'hours', true);
export const getMinutes = ({start, end}) => getDifferenceWithArg(start, end, 'minutes', true)
export const getSeconds = ({start, end}) => getDifferenceWithArg(start, end, 'seconds', true)

export function getCurrentMonthMap() {
    let now = dayjs();
    let firstDayOfMap = now.startOf("month").weekday(0)
    let end = now.endOf("month").weekday(7).add(1, 'day')

    let currentWeekDay = 0;

    let result = []
    let currentWeek = []
    while (
        !(firstDayOfMap.date() === end.date() &&
            firstDayOfMap.month() === end.month() &&
            firstDayOfMap.year() === firstDayOfMap.year())
        ) {
        currentWeek.push(firstDayOfMap)
        if (currentWeekDay++ === 6) {
            result.push(currentWeek);
            currentWeek = []
            currentWeekDay = 0;
        }
        firstDayOfMap = firstDayOfMap.add(1, 'day')
    }

    return {
        name: monthNames[now.month()],
        days: result
    }
}
