import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import {setTextFilter} from './actions/filters';
import {Provider} from 'react-redux';


const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(state)
})

const expenseOne = store.dispatch(addExpense({description: 'Water Bill', amount: 100 , createdAt: 1647392463000}));
const expenseTwo = store.dispatch(addExpense({description: 'Gas Bill', amount: 300, createdAt: 1643331603000}));
const expenseThree = store.dispatch(addExpense({description: 'Rent', amount: 105000, createdAt: 1643331603000}));

// console.log(store.getState());

// store.dispatch(setTextFilter('water'));


const renderApp = () => {
    const appRoot = document.getElementById('root')
    const jsx = (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
    ReactDOM.render(jsx, appRoot)
}

renderApp();