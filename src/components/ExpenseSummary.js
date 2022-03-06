import React from "react";
import ExpensesDashboardPage from "./ExpensesDashboardPage";
import { useSelector } from "react-redux";
import selectExpenseTotal from "../selectors/expenses-total";
import visibleExpenses from "../selectors/expenses";
import numeral from "numeral";

const ExpenseSummary = () => {
    const expenses = useSelector((state) => state.expenses);
    const filters = useSelector((state) => state.filters);
    const visibleExp = visibleExpenses(expenses, filters)
    const expensesTotal = selectExpenseTotal(visibleExp);
    const counterString = visibleExp.length === 1 ? 'expense' : 'expenses';
    return (
        <h4>
            You are viewing {visibleExp.length} {counterString} totaling £{numeral(expensesTotal/100).format('£0,0.00')}.
        </h4>
    )

}

export default ExpenseSummary;