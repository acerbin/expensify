import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import {Provider} from 'react-redux';
import './firebase/firebase'

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(state)
})



// store.dispatch(setTextFilter('water'));


const renderApp = () => {
    const appRoot = document.getElementById('root')
    const jsx = (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
    ReactDOM.render(<p>Loading...</p>, appRoot)
    store.dispatch(startSetExpenses()).then(() => {
        ReactDOM.render(jsx, appRoot)
    }).catch((err) => {
        console.log(err)
    })
}

renderApp();