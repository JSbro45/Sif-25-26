import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css'
import HomePage from './components/page/Home'
import Map from './components/map/Map';
import Form from './components/forms/AuthFormPage';



createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
      <HomePage />
      <Form type='login' />
  </StrictMode>
)



