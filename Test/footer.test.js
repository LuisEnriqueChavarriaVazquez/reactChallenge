import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer'; // Asegúrate de que la ruta sea correcta

describe('Footer', () => {
  // Prueba para verificar que se renderizan el nombre de la empresa y el eslogan
  it('renders the company name and slogan', () => {
    render(<Footer />); // Renderiza el componente Footer
    
    // Verifica que el nombre de la empresa se renderiza en el contenedor de texto del pie de página
    const companyNameElement = screen.getByText(/Paga Todo/i, { selector: '.footer-container__text' });
    expect(companyNameElement).toBeInTheDocument();
    
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

  // Prueba para verificar que se renderiza el área de derechos de autor
  it('renders the copyright area', () => {
    render(<Footer />); // Renderiza el componente Footer
    
    // Verifica que el área de derechos de autor se renderiza
    const copyrightElement = screen.getByText(/Copyright/i);
    expect(copyrightElement).toBeInTheDocument();
  });
});
