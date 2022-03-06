import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description : props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount/100).toString() : "",
            createdAt: props.expense ? props.expense.createdAt : new Date(),
            calendarFocused: false,
            error: ""
        }
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}))
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if(!this.state.amount || !this.state.description) {
            this.setState(() => ({error: "Please provide description and amount values."}))
        } else {
            this.setState(() => ({error: ""}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    } 

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    {this.state.error && <p className="error">{this.state.error}</p>}
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={this.state.createdAt}
                        onSelect={this.onDateChange} //when day is clicked
                        onChange={this.onDateChange} //only when value has changed
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        className="date-picker"
                    />
                    <textarea 
                        placeholder="Add a note for your expense (Optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>{this.props.expense ? "Save Changes" : "Add Expense"}</button>
                </form>
            </div>
        )
    }
}