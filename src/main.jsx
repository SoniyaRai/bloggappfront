import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './View/theme.js'
import { BrowserRouter } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <BrowserRouter>

        <ThemeProvider theme={theme} >
          <App />
        </ThemeProvider>

      </BrowserRouter>



  </React.StrictMode>,
)
