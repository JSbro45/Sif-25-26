import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css'
import HomePage from './components/page/Home'
import Map from './components/map/Map';
import Form from './components/forms/AuthFormPage';
import UserChangingInfo from './components/forms/UserChangingInfo';
import EventView from './components/map/EventView';
import DateIcon from './components/map/DateIcon';
import UserAccountInfo from './components/page/UserAccountInfo';
import ONas from './components/page/ONas';
import PlusBarPU from './components/map/PlusBar-NeprihlasUser';
import PlusBarNU from './components/map/PlusBar-PrihlasenyUser';



createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
      <HomePage />
      <Form type='login' />
      <Map />
      <UserChangingInfo />
      <EventView />
      <DateIcon />
      <UserAccountInfo />
      <ONas />
      <DateIcon />
      <PlusBarPU />
      <PlusBarNU />
  </StrictMode>
)



