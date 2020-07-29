import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import MyAccount from '../pages/myAccount';
import { PageTips } from '../pages/tips';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/tips" element={<PageTips />} />
        </Routes>
    );
}