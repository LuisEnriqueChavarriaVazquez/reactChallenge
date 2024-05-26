import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../src/components/Navbar'; // Asegúrate de que la ruta sea correcta

describe('Navbar', () => {
  it('renders the bank name and slogan', () => {
    render(<Navbar />);
    
    // Verifica que el nombre del banco se renderiza
    const bankNameElement = screen.getByText(/Paga Todo/i, { selector: '.navigation__name' });
    expect(bankNameElement).toBeInTheDocument();
    
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
});
