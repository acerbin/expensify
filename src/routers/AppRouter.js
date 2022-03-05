import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExpensesDashboardPage from '../components/ExpensesDashboardPage';
import CreateExpensesDashboardPage from '../components/CreateExpensesDashboardPage';
import EditExpensesDashboardPage from '../components/EditExpensesDashboardPage';
import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';


const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Routes>
                <Route path="/" element={<ExpensesDashboardPage />} exact={true}/>
                <Route path="/create" element={<CreateExpensesDashboardPage />}/>
                <Route path="/edit/:id" element={<EditExpensesDashboardPage />}/>
                <Route path="/help" element={<HelpPage />}/>
                <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
)

export default AppRouter;
