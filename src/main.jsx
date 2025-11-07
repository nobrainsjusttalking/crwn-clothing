import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './App.jsx';
import { UserProvider } from './contexts/UserContext';
import { CategoriesProvider } from './contexts/CategoriesContext.jsx';
import { CartProvider } from './contexts/CartContext.jsx';

import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
