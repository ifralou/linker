import Dexie from "dexie";

export const thingsDB = new Dexie('persistedThings');
thingsDB.version(1).stores({
    persistedThings : "++id, &name, *links, color"
});
