import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../src/components/Navbar'; // Asegúrate de que la ruta sea correcta

describe('Navbar', () => {
  // Prueba para verificar que se renderizan el nombre del banco y el eslogan
  it('renders the bank name and slogan', () => {
    render(<Navbar />); // Renderiza el componente Navbar
    
    // Verifica que el nombre del banco se renderiza en el contenedor de nombre de la navegación
    const bankNameElement = screen.getByText(/Paga Todo/i, { selector: '.navigation__name' });
    expect(bankNameElement).toBeInTheDocument();
    
    // Verifica que el eslogan se renderiza usando una función personalizada como matcher
    const sloganElement = screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === "Banco Paga Todo, es para todos.";
      const nodeHasText = hasText(element); // Verifica si el nodo tiene el texto esperado
      const childrenDontHaveText = Array.from(element.children).every(
        (child) => !hasText(child) // Verifica si los hijos del nodo no tienen el texto
      );
      return nodeHasText && childrenDontHaveText; // Devuelve true si el nodo tiene el texto y los hijos no lo tienen
    });
    expect(sloganElement).toBeInTheDocument();
  });
});
