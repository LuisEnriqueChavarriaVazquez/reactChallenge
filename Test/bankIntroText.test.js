import React from 'react';
import { render, screen } from '@testing-library/react';
import BankIntroText from '../src/components/BankIntroText'; // Asegúrate de que la ruta sea correcta

describe('BankIntroText', () => {
  // Prueba para verificar que se renderizan el título y la descripción
  it('renders the title and description', () => {
    render(<BankIntroText />);
    
    // Verifica que el título se renderiza
    const titleElement = screen.getByText(/React Challenge/i);
    expect(titleElement).toBeInTheDocument();
    
    // Verifica que la descripción se renderiza correctamente
    const descriptionElement = screen.getByText(/En este challenge de react presenta una lista de bancos/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  // Prueba para verificar que el enlace se renderiza con los atributos correctos
  it('renders the link with correct attributes', () => {
    render(<BankIntroText />);
    
    // Verifica que el enlace se renderiza y tiene los atributos correctos
    const linkElement = screen.getByRole('link', { name: /https:\/\/dev.obtenmas.com\/catom\/api\/challenge\/banks/i });
    expect(linkElement).toBeInTheDocument();
    // Verifica que el atributo href del enlace es correcto
    expect(linkElement).toHaveAttribute('href', 'https://dev.obtenmas.com/catom/api/challenge/banks');
    // Verifica que el enlace se abre en una nueva pestaña
    expect(linkElement).toHaveAttribute('target', '_blank');
    // Verifica que el enlace tiene los atributos de seguridad correctos
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
