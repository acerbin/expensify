import React from 'react';
import {connect} from 'react-redux';
import Expense from './Expense';
import ExpenseSelector from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expenses</h1>
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
                            key={expense.id}
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
