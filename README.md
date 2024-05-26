# Arquitectura del Proyecto

Este proyecto sigue una arquitectura modular por características, diseñada para mantener el código organizado y escalable. A continuación se describen las principales características de esta arquitectura.

## Estructura de Carpetas

La estructura del proyecto se organiza de la siguiente manera:

src/
├── assets/
├── components/
│ ├── BankGrid.js
│ ├── BankIntroText.js
│ ├── BankList.js
│ ├── Footer.js
│ └── Navbar.js
├── context/
│ └── BankContext.js
├── services/
│ └── bankService.js
├── App.js
├── App.test.js
├── index.js
├── reportWebVitals.js
└── setupTests.js

### Componentes

Todos los componentes visuales están ubicados en la carpeta `/components`. Cada componente tiene su propio archivo, facilitando la reutilización y el mantenimiento.

### Context

El manejo del estado global se realiza a través del Context API de React, centralizado en la carpeta `/context`. Esto permite compartir estados entre varios componentes sin necesidad de prop drilling.

### Servicios

La lógica relacionada con la interacción con APIs externas está separada en la carpeta `/services`, manteniendo así la lógica de negocios desacoplada de la UI.

## Ventajas de la Arquitectura

- **Separación de Preocupaciones**: Facilita la comprensión y el mantenimiento del código al mantener cada parte del sistema claramente separada.
- **Reutilización**: Facilita la reutilización de componentes en diferentes partes de la aplicación.
- **Escalabilidad**: Simplifica la adición de nuevas características con mínimo impacto en el resto del sistema.
- **Mantenibilidad**: Permite realizar actualizaciones en partes específicas del sistema sin afectar otras áreas.

## Consideraciones

- **Consistencia**: Es esencial mantener una consistencia en cómo se organizan y se nombran los archivos para facilitar la navegación a cualquier desarrollador.
- **Documentación**: Documentar la estructura y responsabilidades de la aplicación es crucial, especialmente a medida que el proyecto crece.

Este enfoque es recomendado para proyectos que esperan aumentar en tamaño o complejidad, proporcionando una base sólida y fácil de mantener.