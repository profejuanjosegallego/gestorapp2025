// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {ReservaProvider} from './components/common/FormularioReserva/Reserva';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Rutas } from './components/Router/Rutas';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReservaProvider>
      <BrowserRouter>
        <Rutas />
      </BrowserRouter>
    </ReservaProvider>
  </StrictMode>
  
);
