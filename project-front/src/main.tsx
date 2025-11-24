import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css'
import HomePage from './components/page/Home'



createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
      <HomePage />
  </StrictMode>
)



