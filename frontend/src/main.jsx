import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <ScrollToTop/>
    <App />
  </BrowserRouter>,
)
