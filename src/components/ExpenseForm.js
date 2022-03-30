import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startEditExpense } from "../actions/expenses";
import {startRemoveExpense} from "../actions/expenses";

const ExpenseForm = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state, setState] = useState({
        description : props.expense ? props.expense.description : "",
        note: props.expense ? props.expense.note : "",
        amount: props.expense ? (props.expense.amount/100).toString() : "",
        createdAt: props.expense ? props.expense.createdAt : new Date(),
        id: props.expense ? props.expense.id : "",
        calendarFocused: false,
        error: ""
    })
    
    
    const onDescriptionChange = (e) => {
        const description = e.target.value;
        console.log("State: " + JSON.stringify(state))
        setState(() => ({...state, description}))
    }

    const onNoteChange = (e) => {
        const note = e.target.value;
        setState(() => ({...state, note}))
    }

    const onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setState(() => ({...state, amount}))
        }
    }

    const onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({...state, createdAt}))
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!state.amount || !state.description) {
            setState(() => ({...state, error: "Please provide description and amount values"}))
        } else {
            setState(() => ({...state, error: ""}))
            props.onSubmit({
                description: state.description,
                amount: parseFloat(state.amount)*100,
                createdAt: state.createdAt.valueOf(),
                note: state.note
            })
        }
    } 

        return (
            <div>
                <div className="content-container content-container--override">
                    <form className="form" onSubmit={onFormSubmit}>
                        {state.error && <p className="form__error">{state.error}</p>}
                        <input 
                            className="text-input"
                            type="text"
                            placeholder="Description"
                            autoFocus
                            value={state.description}
                            onChange={onDescriptionChange}
                        />
                        <input 
                            className="text-input"
                            type="text"
                            placeholder="Amount"
                            value={state.amount}
                            onChange={onAmountChange}
                        />
                        <DatePicker
                            className="text-input"
                            dateFormat="dd/MM/yyyy"
                            selected={state.createdAt}
                            onSelect={onDateChange} //when day is clicked
                            onChange={onDateChange} //only when value has changed
                            // showMonthDropdown
                            // showYearDropdown
                            dropdownMode="select"
                            className="date-picker"
                        />
                        <textarea 
                            className="textarea"
                            placeholder="Add a note for your expense (Optional)"
                            value={state.note}
                            onChange={onNoteChange}
                        />
                        <div className="wrapper">
                        <button className="active-button">{props.expense ? "Save Expense" : "Add Expense"}</button>
                        <button 
                                className="active-button active-button--secondary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const id = props.expense.id;
                                    dispatch(startRemoveExpense({id}));
                                    navigate("/dashboard")
                                }}>
                                Remove Expense
                        </button>
                    </div>
                    </form>

                </div>
                <div className="pusher">
                </div>
            </div>

        )
}


export default ExpenseForm;