import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/assets/css/main.css';

 import { BrowserRouter as Router } from 'react-router-dom';
// import LoginPage from './pages/login';


ReactDOM.render(
  <React.StrictMode>
    <Router>
     {/* <LoginPage /> */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
