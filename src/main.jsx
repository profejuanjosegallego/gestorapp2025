import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


import { Home } from './components/pages/Home/Home'
import { Dashboard } from './components/pages/Dashboard/Dashboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Dashboard/>
  </StrictMode>,
)