import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BankProvider, BankContext } from '../src/context/BankContext'; // Asegúrate de que la ruta sea correcta
import { fetchBanks } from '../src/services/bankService'; // Asegúrate de que la ruta sea correcta

// Mockear la función fetchBanks
jest.mock('../src/services/bankService');

// Datos simulados para la prueba
const mockData = [{ id: 1, name: 'Bank One' }];

describe('BankProvider', () => {
  // Restablecer el mock antes de cada prueba
  beforeEach(() => {
    fetchBanks.mockReset();
  });

  // Prueba para verificar que se muestra el estado de carga inicialmente
  it('renders loading state initially', () => {
    fetchBanks.mockResolvedValueOnce(mockData);

    render(
      <BankProvider>
        <BankContext.Consumer>
          {({ state }) => (
            <div>
              {state.isLoading ? <span>Loading...</span> : <span>Loaded</span>}
            </div>
          )}
        </BankContext.Consumer>
      </BankProvider>
    );

    // Verifica que el texto "Loading..." esté en el documento
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  // Prueba para verificar que se renderizan los bancos después de obtener los datos
  it('renders banks after fetching data', async () => {
    fetchBanks.mockResolvedValueOnce(mockData);

    render(
      <BankProvider>
        <BankContext.Consumer>
          {({ state }) => (
            <div>
              {state.banks.map((bank) => (
                <div key={bank.id}>{bank.name}</div>
              ))}
            </div>
          )}
        </BankContext.Consumer>
      </BankProvider>
    );

    // Espera hasta que se renderice el banco simulado y verifica su presencia
    await waitFor(() => {
      expect(screen.getByText('Bank One')).toBeInTheDocument();
    });
  });

  // Prueba para verificar que se muestra un mensaje de error cuando la obtención de datos falla
  it('renders error message when fetch fails', async () => {
    fetchBanks.mockRejectedValueOnce(new Error('Failed to fetch'));

    render(
      <BankProvider>
        <BankContext.Consumer>
          {({ state }) => (
            <div>
              {state.error ? <span>Error: {state.error}</span> : null}
            </div>
          )}
        </BankContext.Consumer>
      </BankProvider>
    );

    // Espera hasta que se renderice el mensaje de error y verifica su presencia
    await waitFor(() => {
      expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument();
    });
  });
});
