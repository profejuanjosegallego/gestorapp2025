import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


import { Router } from './components/common/Routes/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Router></Router>
    </BrowserRouter>
   
  </StrictMode>,
)
