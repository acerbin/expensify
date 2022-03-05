import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";

const AddExpensePage = (props) => {
    let navigate = useNavigate();
    return (<div>
        <h1 className="dashboard_title">Add Expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense))
            navigate("/")
        }}/>
    </div>)
}

export default connect()(AddExpensePage);