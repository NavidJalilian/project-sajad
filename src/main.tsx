import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MultiStepThemeProvider from './theme/themeProvider';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MultiStepThemeProvider>
      <App />
    </MultiStepThemeProvider>
  </React.StrictMode>
);
