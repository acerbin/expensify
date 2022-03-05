import React from "react";
import { useParams } from "react-router";
import ExpenseForm from "./ExpenseForm";
import { useSelector, useDispatch } from "react-redux";
import { editExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";


const EditExpensesDashboardPage = (props) =>  {
    const { id } = useParams();
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const expense = useSelector((state) => {
        return state.expenses.find((expense) => {
                return expense.id === id;
            })
    })
    console.log(expense)
    return (<ExpenseForm 
        expense={expense}
        onSubmit = {(expenseChanges) => {
            dispatch(editExpense(expense.id, expenseChanges))
            navigate("/")
        }}
        />)
}

// const mapStoreToProps = (state, props) => {
//     console.log(props)
//     return {
//         expense: state.expenses.find((expense) => {
//             return expense.id === "daf8691f-6d83-44c0-b3c5-c1814a29c101";
//         })
//     }
// }

// export default connect(mapStoreToProps)(EditExpensesDashboardPage);
export default EditExpensesDashboardPage;