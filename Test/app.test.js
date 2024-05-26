import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App'; // Asegúrate de que la ruta sea correcta
import { fetchBanks } from '../src/services/bankService'; // Asegúrate de que la ruta sea correcta

// Mockear la función fetchBanks
jest.mock('../src/services/bankService');

// Datos simulados para la prueba
const mockData = [{ id: 1, bankName: 'Bank One', description: 'Description One', age: 10, url: 'http://example.com/one.jpg' }];

describe('App', () => {
  // Configurar el mock antes de cada prueba
  beforeEach(() => {
    fetchBanks.mockResolvedValueOnce(mockData);
  });

  // Prueba para verificar que el componente Navbar se renderiza
  it('renders Navbar component', () => {
    render(<App />);
    expect(screen.getByText('Paga Todo')).toBeInTheDocument(); // Asegúrate de que el texto es correcto
  });

  // Prueba para verificar que el componente BankList se renderiza y muestra los datos simulados
  it('renders BankList component', async () => {
    render(<App />);
    await screen.findByText('Bank One'); // Espera a que se renderice el banco simulado
    expect(screen.getByText('Bank One')).toBeInTheDocument();
  });

  // Prueba para verificar que el componente BankGrid se renderiza y muestra los datos simulados
  it('renders BankGrid component', async () => {
    render(<App />);
    await screen.findByText('Bank One'); // Espera a que se renderice el banco simulado
    expect(screen.getByText('Bank One')).toBeInTheDocument();
  });

  // Prueba para verificar que el componente Footer se renderiza
  it('renders Footer component', () => {
    render(<App />);
    expect(screen.getByText(/Todos los derechos reservados/i)).toBeInTheDocument(); // Asegúrate de que el texto es correcto
  });
});
