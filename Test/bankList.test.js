import React from 'react';
import { render, screen } from '@testing-library/react';
import BankList from '../src/components/BankList'; // Asegúrate de que la ruta sea correcta
import { BankContext } from '../src/context/BankContext';

// Mockea Swiper y sus componentes
jest.mock('swiper/react', () => require('../__mocks__/swiperReactMock'));
jest.mock('swiper/css');
jest.mock('swiper/css/effect-cards');
jest.mock('swiper/modules', () => ({
  EffectCards: () => null,
}));

const mockBanks = [
  { bankName: 'Bank One', description: 'Description One', age: 10, url: 'http://example.com/one.jpg' },
  { bankName: 'Bank Two', description: 'Description Two', age: 20, url: 'http://example.com/two.jpg' }
];

describe('BankList', () => {
  it('renders loading state initially', () => {
    const state = { banks: [], isLoading: true, error: null };
    render(
      <BankContext.Provider value={{ state }}>
        <BankList />
      </BankContext.Provider>
    );
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    const state = { banks: [], isLoading: false, error: 'Failed to fetch' };
    render(
      <BankContext.Provider value={{ state }}>
        <BankList />
      </BankContext.Provider>
    );
    expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument();
  });

  it('renders bank list', () => {
    const state = { banks: mockBanks, isLoading: false, error: null };
    render(
      <BankContext.Provider value={{ state }}>
        <BankList />
      </BankContext.Provider>
    );
    expect(screen.getByText('Bank One')).toBeInTheDocument();
    expect(screen.getByText('Bank Two')).toBeInTheDocument();
    expect(screen.getByText('Description One')).toBeInTheDocument();
    expect(screen.getByText('Description Two')).toBeInTheDocument();
  });
});
