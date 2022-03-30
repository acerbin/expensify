import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpenseSummary from './ExpenseSummary';

const ExpensesDashboardPage = () => (
    <div>
        <div className='dashboard'>
            <ExpenseSummary />
            <ExpenseListFilter />
            <ExpenseList />
        </div>
        <div className='pusher'></div>
    </div>

)

export default ExpensesDashboardPage;