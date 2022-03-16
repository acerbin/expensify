
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";
import thunk from "redux-thunk";
const coomposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store and combine reducers
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        }),
        coomposeEnhancers(applyMiddleware(thunk))
    )
    return store;
}
