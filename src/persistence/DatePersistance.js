import Dexie from "dexie";


export const datesDB = new Dexie("persistedDates")
datesDB.version(1).stores({
    persistedActivities: "++id, [date+name+from+to]"
})
