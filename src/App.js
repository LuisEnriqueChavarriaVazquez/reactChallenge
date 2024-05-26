import React from 'react';
import { BankProvider } from './context/BankContext';
import BankList from './components/BankList';
import BankGrid from './components/BankGrid';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Envuelve los componentes que necesitan acceso al estado de los bancos con BankProvider */}
      <Navbar/>
      <BankProvider>
        <BankList />
        <BankGrid />
      </BankProvider>
      <Footer/>
    </div>
  );
}

export default App;
