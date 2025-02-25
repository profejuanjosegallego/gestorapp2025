// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { Home } from './components/pages/Home/Home';
import Dashboard from './components/pages/Dashboard/Dashboard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />  {/* Ruta para la página de inicio */}
        <Route path="/dashboard" element={<Dashboard />} />  {/* Ruta para el Dashboard */}
      </Routes>
    </Router>
  </StrictMode>
);
