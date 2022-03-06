import React from "react";
import { connect } from "react-redux";
import {removeExpense} from "../actions/expenses";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import numeral from "numeral";

const Expense = (props) => {
    let navigate = useNavigate();
    return (<tr>
        <td>
            <Link to={`/edit/${props.id}`}>
                {props.description}
            </Link>
        </td>
        <td>£{numeral(props.amount/100).format('£0,0.00')}</td>
        <td>{(new Date(props.createdAt)).toLocaleDateString()}</td>
        <td><button onClick={(e) => {
            e.preventDefault();
            props.dispatch(removeExpense({id:props.id}))
            console.log(props.id)
        }}>Remove</button>
        <button onClick={(e) => {
            e.preventDefault();
            navigate("/edit/" + props.id)
        }}>Edit</button>
        </td>
        </tr>
    )
}


export default connect()(Expense);