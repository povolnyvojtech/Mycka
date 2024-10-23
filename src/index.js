import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';  // React 18 nové API
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter pro routing
import App from './App';  // Hlavní aplikace

// Vytvoříme root element
const root = createRoot(document.getElementById('root'));

// Obalíme App komponentu do BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
