import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import React from 'react'
import './index.css'
import App from './App.jsx'
import './fontawesome';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)
