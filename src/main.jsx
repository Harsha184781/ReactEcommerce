import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Store from './Components/Store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

//Here i am wraping the main app component in Provider for accessing the store using useSelector and i am wrapping the 
// component in browserRouter for routing to get work, and in provider i am providing the value for store as Store
// dynamically





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
 <Provider  store={Store}>
    <App />
 </Provider> 
 </BrowserRouter>
  </StrictMode>
)
