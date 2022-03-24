import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from '../components/Footer'
import PageNotFound from '../components/PageNotFound';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
                <Route path="/" element={<PublicRoute load="login"/>} exact={true}/>
                <Route path="/dashboard" element={<PrivateRoute load="dashboard" />}/>
                <Route path="/create" element={<PrivateRoute load="create" />}  />
                <Route path="/edit/:id" element={<PrivateRoute load="edit" />}/>
                <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
)

export default AppRouter;
