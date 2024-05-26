import React from 'react';
import { render, screen } from '@testing-library/react';
import BankIntroText from '../src/components/BankIntroText'; // Asegúrate de que la ruta sea correcta

describe('BankIntroText', () => {
  it('renders the title and description', () => {
    render(<BankIntroText />);
    
    // Verifica que el título se renderiza
    const titleElement = screen.getByText(/React Challenge/i);
    expect(titleElement).toBeInTheDocument();
    
    // Verifica que la descripción se renderiza correctamente
    const descriptionElement = screen.getByText(/En este challenge de react presenta una lista de bancos/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the link with correct attributes', () => {
    render(<BankIntroText />);
    
    // Verifica que el enlace se renderiza y tiene los atributos correctos
    const linkElement = screen.getByRole('link', { name: /https:\/\/dev.obtenmas.com\/catom\/api\/challenge\/banks/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://dev.obtenmas.com/catom/api/challenge/banks');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
