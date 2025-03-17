import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Store from './Components/Store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
 <Provider  store={Store}>
    <App />
 </Provider> 
 </BrowserRouter>
  </StrictMode>
)
