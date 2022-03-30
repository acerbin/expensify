import React from "react";
import ExpensesDashboardPage from "./ExpensesDashboardPage";
import { useSelector } from "react-redux";
import selectExpenseTotal from "../selectors/expenses-total";
import visibleExpenses from "../selectors/expenses";
import numeral from "numeral";
import { Link } from "react-router-dom";

const ExpenseSummary = () => {
    const expenses = useSelector((state) => state.expenses);
    const filters = useSelector((state) => state.filters);
    const visibleExp = visibleExpenses(expenses, filters)
    const expensesTotal = selectExpenseTotal(visibleExp);
    const counterString = visibleExp.length === 1 ? 'expense' : 'expenses';
    return (
        <div className="page-header">
            <div className="content-container">
                <div>
                        <h1 className="page-header__title">
                        Viewing <span>{visibleExp.length}</span> {counterString} totaling <span>£{numeral(expensesTotal/100).format('£0,0.00')}</span>.
                    </h1>
                    <div className="page-header__actions">
                        <Link className="active-button" to="/create">Add Expense</Link>
                    </div>    
                </div>
            </div>
        </div>

    )

}

export default ExpenseSummary;