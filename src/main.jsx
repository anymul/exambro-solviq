import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AppRoutes from './AppRoutes.jsx'
import ScrollToTop from './componenets/ScrollToTop.js'
import './index.css'
import 'katex/dist/katex.min.css'

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <HelmetProvider>
      <React.StrictMode>
        <BrowserRouter>
          <ScrollToTop />
          <AppRoutes />
        </BrowserRouter>
      </React.StrictMode>
    </HelmetProvider>
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <HelmetProvider>
      <React.StrictMode>
        <BrowserRouter>
          <ScrollToTop />
          <AppRoutes />
        </BrowserRouter>
      </React.StrictMode>
    </HelmetProvider>
  );
}