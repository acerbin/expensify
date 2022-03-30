import React from 'react';
import {connect} from 'react-redux';
import Expense from './Expense';
import ExpenseSelector from '../selectors/expenses';
const ExpenseList = (props) => (
    <div>
        <div className='list-container'>
            <div className='list-header'>
                <div className='show-for-mobile'>Expenses</div>
                <div className='show-for-desktop'>Expense</div>
                <div className='show-for-desktop'>Amount</div>
            </div>
                <div className='list-body'>
                {
                    props.expenses.length === 0 ? (
                        <div className='list-item list-item--message'>
                            <span>No expenses</span>
                        </div>
                    ) : (props.expenses.map((expense, index) => {
                        return (
                            <Expense 
                                {...expense}
                                key={index}
                            />
                        )
                    }))
                }
            </div>

        </div>
        


    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: ExpenseSelector(state.expenses, state.filters)
    }
}

export default  connect(mapStateToProps)(ExpenseList)

