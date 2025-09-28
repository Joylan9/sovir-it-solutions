// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind-output.css';    // Compiled Tailwind CSS
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';


// Inject Google Fonts link
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
