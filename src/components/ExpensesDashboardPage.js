import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpensesDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
)

export default ExpensesDashboardPage;