import React from "react";
import { useSelector } from "react-redux";
import ExpensesDashboardPage from "../components/ExpensesDashboardPage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";

export const PublicRoute = ({load}) => {
    const auth = useSelector(state => state.auth)
    const isAuthenticated = !!auth.uid
    return (
        <div>
        {isAuthenticated ? <Header />: null}
        {isAuthenticated ? <ExpensesDashboardPage /> : <LoginPage />}
        </div>
    )
}
