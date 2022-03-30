import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const ExpenseListFilter = (props) => {
    return (
        <div >
            <div className="input-group">
                <div className="input-group__item">
                    <input className="text-input" placeholder="Search expenses" type="text" value={props.filters.text} onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value))
                    }}/>
                </div>
                <div className="input-group__item">
                    <select className="select" value={props.filters.sortBy} onChange={(e) => {
                        if(e.target.value === "amount") {
                            props.dispatch(sortByAmount())
                        } else {
                            props.dispatch(sortByDate()) 
                        } 
                    }}>
                        <option value="date">Order by Date</option>
                        <option value="amount">Ordery by Amount</option>
                    
                    </select>
                </div>

                <div className="input-group__item">
                    <DatePicker
                        className="text-input"
                        selectsRange={true}
                        startDate={props.filters.startDate}
                        endDate={props.filters.endDate}
                        onChange={(update) => {
                            console.log("update is" + update[0])
                            props.dispatch(setStartDate(update[0])) 
                            props.dispatch(setEndDate(update[1]))

                        }}
                        isClearable={true}
                        dateFormat="dd/MM/yyyy"

                    />

                </div>


                
            </div>
            
    
        </div>
    )
}


const mapStoreToProps = (store) => {
    return {
        filters: store.filters
    }
}
export default connect(mapStoreToProps)(ExpenseListFilter);