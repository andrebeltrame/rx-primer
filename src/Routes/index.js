import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import MyAccount from '../pages/myAccount';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/account" element={<MyAccount />} />
        </Routes>
    );
}