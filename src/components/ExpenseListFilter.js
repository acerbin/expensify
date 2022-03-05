import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const ExpenseListFilter = (props) => {
    return (
        <div>
            <input type="text" value={props.filters.text} onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}/>
            <select value={props.filters.sortBy} onChange={(e) => {
                if(e.target.value === "amount") {
                    props.dispatch(sortByAmount())
                } else {
                    props.dispatch(sortByDate()) 
                } 
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            
            </select>
            <p>Start Date: </p>
            <DatePicker
                selected={props.filters.startDate}
                onChange={(date) => {
                    props.dispatch(setStartDate(date))
                }}
                selectsStart
                // startDate={props.filters.startDate}
                // endDate={props.filters.endDate}
                dateFormat="dd/MM/yyyy"
                isClearable
            />
            <p>End Date: </p>
            <DatePicker
                selected={props.filters.endDate}
                onChange={(date) => {
                    props.dispatch(setEndDate(date))
                }}
                selectsEnd
                // startDate={props.filters.startDate}
                // endDate={props.filters.endDate}
                minDate={props.filters.startDate}
                dateFormat="dd/MM/yyyy"
                isClearable
            />
    
        </div>
    )
}


const mapStoreToProps = (store) => {
    return {
        filters: store.filters
    }
}
export default connect(mapStoreToProps)(ExpenseListFilter);