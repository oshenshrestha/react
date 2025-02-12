import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, HashRouter } from "react-router-dom";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename='/react/'>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
