import React from "react";
import { useSelector } from "react-redux";
import ExpensesDashboardPage from '../components/ExpensesDashboardPage';
import CreateExpensesDashboardPage from '../components/CreateExpensesDashboardPage';
import EditExpensesDashboardPage from '../components/EditExpensesDashboardPage';
import Header from '../components/Header'
import LoginPage from "../components/LoginPage";

// <Route path="/dashboard" element={<ExpensesDashboardPage />} exact={true}/>
// <Route path="/create" element={<CreateExpensesDashboardPage />}/>
// <Route path="/edit/:id" element={<EditExpensesDashboardPage />}/>

export const PrivateRoute = ({load}) => {
    const auth = useSelector(state => state.auth)
    const isAuthenticated = !!auth.uid
    
    return (
        <div>
            {isAuthenticated && <Header />}
            {isAuthenticated ?  load === "dashboard" ? <ExpensesDashboardPage /> : load === "create"? <CreateExpensesDashboardPage /> : load === "edit" ? <EditExpensesDashboardPage /> : null : <LoginPage />}
        </div>
        )

}