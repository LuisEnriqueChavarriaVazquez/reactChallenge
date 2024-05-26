import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BankProvider, BankContext } from '../src/context/BankContext'; // Asegúrate de que la ruta sea correcta
import { fetchBanks } from '../src/services/bankService'; // Asegúrate de que la ruta sea correcta

// Mockear la función fetchBanks
jest.mock('../src/services/bankService');

const mockData = [{ id: 1, name: 'Bank One' }];

describe('BankProvider', () => {
  beforeEach(() => {
    fetchBanks.mockReset();
  });

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

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

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

    await waitFor(() => {
      expect(screen.getByText('Bank One')).toBeInTheDocument();
    });
  });

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

    await waitFor(() => {
      expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument();
    });
  });
});
