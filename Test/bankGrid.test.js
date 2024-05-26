import React from 'react';
import { render, screen } from '@testing-library/react';
import BankGrid from '../src/components/BankGrid'; // Asegúrate de que la ruta sea correcta
import { BankContext } from '../src/context/BankContext';

// Datos simulados para la prueba
const mockBanks = [
  { bankName: 'Bank One', description: 'Description One', age: 10, url: 'http://example.com/one.jpg' },
  { bankName: 'Bank Two', description: 'Description Two', age: 20, url: 'http://example.com/two.jpg' }
];

describe('BankGrid', () => {
  // Prueba para verificar que se muestra el estado de carga inicialmente
  it('renders loading state initially', () => {
    const state = { banks: [], isLoading: true, error: null };
    render(
      <BankContext.Provider value={{ state }}>
        <BankGrid />
      </BankContext.Provider>
    );
    // Verifica que el texto "Cargando..." esté en el documento
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  // Prueba para verificar que se muestra un mensaje de error
  it('renders error state', () => {
    const state = { banks: [], isLoading: false, error: 'Failed to fetch' };
    render(
      <BankContext.Provider value={{ state }}>
        <BankGrid />
      </BankContext.Provider>
    );
    // Verifica que el mensaje de error esté en el documento
    expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument();
  });

  // Prueba para verificar que se renderiza el grid de bancos correctamente
  it('renders bank grid', () => {
    const state = { banks: mockBanks, isLoading: false, error: null };
    render(
      <BankContext.Provider value={{ state }}>
        <BankGrid />
      </BankContext.Provider>
    );
    // Verifica que los nombres, descripciones y edades de los bancos simulados estén en el documento
    expect(screen.getByText('Bank One')).toBeInTheDocument();
    expect(screen.getByText('Bank Two')).toBeInTheDocument();
    expect(screen.getByText('Description One')).toBeInTheDocument();
    expect(screen.getByText('Description Two')).toBeInTheDocument();
    expect(screen.getByText('Edad: 10')).toBeInTheDocument();
    expect(screen.getByText('Edad: 20')).toBeInTheDocument();
  });

  // Prueba para verificar que las imágenes de los bancos se renderizan con el texto alternativo correcto
  it('renders bank images with correct alt text', () => {
    const state = { banks: mockBanks, isLoading: false, error: null };
    render(
      <BankContext.Provider value={{ state }}>
        <BankGrid />
      </BankContext.Provider>
    );
    const imgElements = screen.getAllByRole('img');
    // Verifica que las imágenes tengan los atributos src y alt correctos
    expect(imgElements[0]).toHaveAttribute('src', 'http://example.com/one.jpg');
    expect(imgElements[0]).toHaveAttribute('alt', 'Bank One');
    expect(imgElements[1]).toHaveAttribute('src', 'http://example.com/two.jpg');
    expect(imgElements[1]).toHaveAttribute('alt', 'Bank Two');
  });
});
