import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter
} from 'react-router-dom';
import App from './App';
import './styles/globals.css';
import { ThemeProvider } from './hooks/useTheme';

// Configure future flags for React Router v7
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter future={router.future}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
