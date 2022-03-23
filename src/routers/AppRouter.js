import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from '../components/Footer'

import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../components/LoginPage';
import { PrivateRoute } from './PrivateRoute';

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
                <Route path="/" element={<LoginPage />} exact={true}/>
                <Route path="/dashboard" element={<PrivateRoute load="dashboard" />}/>
                <Route path="/create" element={<PrivateRoute load="create" />}  />
                <Route path="/edit/:id" element={<PrivateRoute load="edit" />}/>
                <Route path="/help" element={<HelpPage />}/>
                <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
)

export default AppRouter;
