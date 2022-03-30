import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";

const AddExpensePage = (props) => {
    let navigate = useNavigate();
    return (<div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add Expense</h1>
            </div>
        </div>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(startAddExpense(expense))
            navigate("/dashboard")
        }}/>
    </div>)
}

export default connect()(AddExpensePage);