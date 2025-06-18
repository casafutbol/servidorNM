import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Proveedorcontexto } from './0.CONTEXTO.App';
import './App.css';
import LogueoApp from './LogueoApp/Logueo.App';
import { useCustomers } from './HOOKS/useCustomers';
import RutasPublicasApp from './RUTAS/Rutas.Publicas.App';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Proveedorcontexto>
        <LogueoApp>
          <RutasPublicasApp />
        </LogueoApp>
      </Proveedorcontexto>
    </BrowserRouter>
  );
};

export default App;
