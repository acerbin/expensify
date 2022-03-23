import React from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(startLogout()).then(() => {
            navigate('/')
        })
    }
    return (
        <header>
            <h1>Expensify</h1>
            <h3><NavLink className={(navData) => (navData.isActive ? "is-active" : "none")} to="/dashboard">Dashboard</NavLink></h3>
            <h3><NavLink className={(navData) => (navData.isActive ? "is-active" : "none")} to="/create">Create Expense</NavLink></h3>
            <h3><NavLink className={(navData) => (navData.isActive ? "is-active" : "none")} to="/help">Help</NavLink></h3>
            <button onClick={onLogout}>Logout</button>
        </header>
    )
}


export default Header;