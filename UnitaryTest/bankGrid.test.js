import React from 'react';
import { render, screen } from '@testing-library/react';
import BankGrid from '../src/components/BankGrid'; // Asegúrate de que la ruta sea correcta
import { BankContext } from '../src/context/BankContext';

const mockBanks = [
  { bankName: 'Bank One', description: 'Description One', age: 10, url: 'http://example.com/one.jpg' },
  { bankName: 'Bank Two', description: 'Description Two', age: 20, url: 'http://example.com/two.jpg' }
];

describe('BankGrid', () => {
  it('renders loading state initially', () => {
    const state = { banks: [], isLoading: true, error: null };
    render(
      <BankContext.Provider value={{ state }}>
        <BankGrid />
      </BankContext.Provider>
    );
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    const state = { banks: [], isLoading: false, error: 'Failed to fetch' };
    render(
      <BankContext.Provider value={{ state }}>
        <BankGrid />
      </BankContext.Provider>
    );
    expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument();
  });

  it('renders bank grid', () => {
    const state = { banks: mockBanks, isLoading: false, error: null };
    render(
      <BankContext.Provider value={{ state }}>
        <BankGrid />
      </BankContext.Provider>
    );
    expect(screen.getByText('Bank One')).toBeInTheDocument();
    expect(screen.getByText('Bank Two')).toBeInTheDocument();
    expect(screen.getByText('Description One')).toBeInTheDocument();
    expect(screen.getByText('Description Two')).toBeInTheDocument();
    expect(screen.getByText('Edad: 10')).toBeInTheDocument();
    expect(screen.getByText('Edad: 20')).toBeInTheDocument();
  });

  it('renders bank images with correct alt text', () => {
    const state = { banks: mockBanks, isLoading: false, error: null };
    render(
      <BankContext.Provider value={{ state }}>
        <BankGrid />
      </BankContext.Provider>
    );
    const imgElements = screen.getAllByRole('img');
    expect(imgElements[0]).toHaveAttribute('src', 'http://example.com/one.jpg');
    expect(imgElements[0]).toHaveAttribute('alt', 'Bank One');
    expect(imgElements[1]).toHaveAttribute('src', 'http://example.com/two.jpg');
    expect(imgElements[1]).toHaveAttribute('alt', 'Bank Two');
  });
});
