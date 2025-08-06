import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import { MediaProvider } from './context/MediaContext.tsx';

import './styles/global/reset.css';
import './styles/global/variables.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MediaProvider>
      <App />
      </MediaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
