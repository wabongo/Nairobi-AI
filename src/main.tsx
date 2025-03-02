import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  UNSAFE_DataRouterContext,
  UNSAFE_DataRouterStateContext,
  UNSAFE_NavigationContext,
  UNSAFE_LocationContext,
  UNSAFE_RouteContext
} from 'react-router-dom';
import App from './App';
import './styles/globals.css';

// Configure future flags for React Router v7
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter future={router.future}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
