import dayjs from "dayjs";
import wd from "dayjs/plugin/weekday"
import locale from "dayjs/locale/de";

dayjs.locale(locale)
dayjs.extend(wd)

export const monthNames = [
    "January", "February",
    "March", "April", "May",
    "June", "July", "August",
    "September", "October", "November",
    "December"
];

// Timer
export function getCurrentTime() {
    return dayjs();
}

const getTime = ({start, end}, period) => Math.floor(end.diff(start, period, true))
export const getFormattedDifference = (timer) =>
    `${getTime(timer, "hour")}:${getTime(timer, "minute")}:${getTime(timer, "second")}`

const zeroPad = (num) => (0 <= num && num <= 9) ? '0' + num : num;
const getDifferenceWithArg = ({start, end}, arg, pad) => {
    let res = Math.floor(end.diff(start, arg, true)) % 60;
    if(pad) {
        return zeroPad(res);
    }
    return res;
}

export const getHours = (timer) => getDifferenceWithArg(timer, 'hours', true);
export const getMinutes = (timer) => getDifferenceWithArg(timer, 'minutes', true)
export const getSeconds = (timer) => getDifferenceWithArg(timer, 'seconds', true)


//Calendar
export const calendar = () => initiateCalendar(dayjs())

function initiateCalendar(reference) {
   return {
       month: reference.month(),
       year: reference.year(),
       calendarMap: () => getCurrentMonthMap(reference),
       next: () => initiateCalendar(reference.add(1, 'month')),
       prev: () => initiateCalendar(reference.subtract(1, 'month'))
   }
}

function getCurrentMonthMap(now) {
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

        currentWeek.push(firstDayOfMap);

        if (currentWeekDay++ === 6) {
            result.push(currentWeek);
            currentWeek = []
            currentWeekDay = 0;
        }
        firstDayOfMap = firstDayOfMap.add(1, 'day')
    }
    return result;
}
