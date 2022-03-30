import React from "react";
import {Link, useNavigate} from 'react-router-dom';
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
    //  <h3><NavLink className={(navData) => (navData.isActive ? "is-active" : "none")} to="/create">Create Expense</NavLink></h3>

    return (
        <header className="header">
            <div className="content-container">
                <Link to="/dashboard"><h1 className="header__heading">Expensify</h1></Link>
                <button className="active-button active-button--link" onClick={onLogout}>Logout</button>
            </div>

        </header>

    )
}


export default Header;