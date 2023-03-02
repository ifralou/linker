export function linkerReducer (state, action) {
    switch (action.type) {
        case actions.addThing:
            console.dir(action.payload)
            return [...state, action.payload];
        case actions.deleteThing:
            return state.filter(item => item !== action.payload)
        case actions.addLinkToThing:
            let index = state.findIndex(item => item.name === action.payload.name);
            let item = state[index]
            if(item.links.map(l => l.url).includes(action.payload.link.url)) {
                return state;
            }
            return [...state.slice(0, index), {
               name: item.name,
               description: item.description,
               links: [...item.links, action.payload.link]
            }, ...state.slice(index + 1, state.length)]
    }

    throw Error("No such state exists inside application.")
}

export let actions = {
    addThing : 1,
    deleteThing: 2,
    addLinkToThing: 3
}
