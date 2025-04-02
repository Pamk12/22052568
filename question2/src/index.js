import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './output.css'; // Change from input.css to output.css
// Remove duplicate import: import { createRoot } from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


