import {createStore} from "redux";

const increment = ({incrementBy = 1} = {}) => ({
    type: "INCREMENT",
    incrementBy
})

const decrement = ({decrementBy = 1} = {}) => ({
    type: "DECREMENT",
    decrementBy
})

const set = ({count = 1} = {}) => ({
    type: "SET",
    count
})

const reset = () => ({
    type: "RESET"
})

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case "INCREMENT" :
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT" :
            return {
                count: state.count - action.decrementBy
            };
        case "RESET" :
            return {
                count: 0
            };
        case "SET" :
            return {
                count: action.count
            };
        default:
            return {
                count: state.count
            }
    }
})

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(increment({incrementBy : 5}))

store.dispatch(decrement({decrementBy : 5}))

store.dispatch(reset())

store.dispatch(set({count: 60}))

store.dispatch(decrement())

console.log(store.getState())
