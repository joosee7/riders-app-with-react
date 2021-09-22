import React from 'react';
import ReactDOM from 'react-dom';
import { ModalReserved } from './components/ModalReserved';
import { RidersApp } from './RidersApp';

ReactDOM.render(
  <React.StrictMode>
    <RidersApp />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <ModalReserved />
  </React.StrictMode>,
  document.getElementById('modalOpen')
);