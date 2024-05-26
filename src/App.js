import React from 'react';
import { BankProvider } from './context/BankContext';
import BankList from './components/BankList';
import './styles/app.css'; // Asegúrate de que el nombre de archivo coincida con tu estructura de proyecto

function App() {
  return (
    <div className="App">
      {/* Envuelve los componentes que necesitan acceso al estado de los bancos con BankProvider */}
      <BankProvider>
        <h1>Lista de Bancos</h1>
        <BankList />
      </BankProvider>
    </div>
  );
}

export default App;
