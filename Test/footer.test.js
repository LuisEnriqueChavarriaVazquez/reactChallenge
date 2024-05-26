import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer'; // Asegúrate de que la ruta sea correcta

describe('Footer', () => {
  it('renders the company name and slogan', () => {
    render(<Footer />);
    
    // Verifica que el nombre de la empresa se renderiza
    const companyNameElement = screen.getByText(/Paga Todo/i, { selector: '.footer-container__text' });
    expect(companyNameElement).toBeInTheDocument();
    
    // Verifica que el eslogan se renderiza usando una función como matcher
    const sloganElement = screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === "Banco Paga Todo, es para todos.";
      const nodeHasText = hasText(element);
      const childrenDontHaveText = Array.from(element.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(sloganElement).toBeInTheDocument();
  });

  it('renders the copyright area', () => {
    render(<Footer />);
    
    // Verifica que el área de derechos de autor se renderiza
    const copyrightElement = screen.getByText(/Copyright/i);
    expect(copyrightElement).toBeInTheDocument();
  });
});
