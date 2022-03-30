import React from "react";
import { useParams } from "react-router";
import ExpenseForm from "./ExpenseForm";
import { useSelector, useDispatch } from "react-redux";
import { startEditExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";
import {startRemoveExpense} from "../actions/expenses";

const EditExpensesDashboardPage = (props) =>  {
    const { id } = useParams();
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const expense = useSelector((state) => {
        return state.expenses.find((expense) => {
                return expense.id === id;
            })
    })
    return (
        <div className=".content-container--collumn">
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <ExpenseForm 
                expense={expense}
                onSubmit = {(expenseChanges) => {
                    dispatch(startEditExpense(expense.id, expenseChanges))
                    navigate("/dashboard")
                }}
                />

        </div>
)}

export default EditExpensesDashboardPage;