import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ReservasProvider } from './Contexts/reservascontext.jsx'
import { Router } from './components/Router/Router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ReservasProvider>
        <Router />
      </ReservasProvider>
    </BrowserRouter>
  </StrictMode>
)