import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/global.css';
import App from '../src/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

