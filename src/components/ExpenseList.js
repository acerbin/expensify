import React from 'react';
import {connect} from 'react-redux';
import Expense from './Expense';
import ExpenseSelector from '../selectors/expenses';
import ExpenseSummary from "./ExpenseSummary";
const ExpenseList = (props) => (
    <div>
        <h1>Expenses</h1>
        <ExpenseSummary />
        <table border='solid'>
            <thead>
                <tr>
                    <td>Description</td>
                    <td>Amount</td>
                    <td>CretedAt</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {props.expenses.map((expense, index) => {
                    return (
                        <Expense 
                            {...expense}
                            key={index}
                        />
                    )
                })}
            </tbody>

        </table>


    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: ExpenseSelector(state.expenses, state.filters)
    }
}

export default  connect(mapStateToProps)(ExpenseList)

