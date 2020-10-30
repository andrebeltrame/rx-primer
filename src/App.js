import React from 'react';
import TemplateBase from './TemplateBase';
import LoginPage from './pages/login';
import { UserStorage } from './UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageTips from './pages/tips';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<TemplateBase />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
      
      )
}

export default App