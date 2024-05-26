import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App'; // Asegúrate de que la ruta sea correcta
import { fetchBanks } from '../src/services/bankService'; // Asegúrate de que la ruta sea correcta

// Mockear la función fetchBanks
jest.mock('../src/services/bankService');

const mockData = [{ id: 1, bankName: 'Bank One', description: 'Description One', age: 10, url: 'http://example.com/one.jpg' }];

describe('App', () => {
  beforeEach(() => {
    fetchBanks.mockResolvedValueOnce(mockData);
  });

  it('renders Navbar component', () => {
    render(<App />);
    expect(screen.getByText('Paga Todo')).toBeInTheDocument(); // Asegúrate de que el texto es correcto
  });

  it('renders BankList component', async () => {
    render(<App />);
    await screen.findByText('Bank One'); // Espera a que se renderice el banco simulado
    expect(screen.getByText('Bank One')).toBeInTheDocument();
  });

  it('renders BankGrid component', async () => {
    render(<App />);
    await screen.findByText('Bank One'); // Espera a que se renderice el banco simulado
    expect(screen.getByText('Bank One')).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    render(<App />);
    expect(screen.getByText(/Todos los derechos reservados/i)).toBeInTheDocument(); // Asegúrate de que el texto es correcto
  });
});
