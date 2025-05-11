import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowswrRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowswrRouter>
      <App />
    </BrowswrRouter>
  </StrictMode>
)
