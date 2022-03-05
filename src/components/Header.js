import React from "react";
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <h3><NavLink className={(navData) => (navData.isActive ? "is-active" : "none")} to="/">Dashboard</NavLink></h3>
        <h3><NavLink className={(navData) => (navData.isActive ? "is-active" : "none")} to="/create">Create Expense</NavLink></h3>
        <h3><NavLink className={(navData) => (navData.isActive ? "is-active" : "none")} to="/help">Help</NavLink></h3>
    </header>
)

export default Header;