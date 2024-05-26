## Índice

1. [Cómo ejecutar el proyecto](#cómo-correr-el-proyecto)
2. [Arquitectura del proyecto](#arquitectura-del-proyecto)
3. [Solución a CORS](#Solución-a-cors)

# Cómo Correr el Proyecto

Sigue los pasos a continuación para configurar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

Asegúrate de tener instalados los siguientes software en tu máquina:
- Node.js (versión 14.x o superior)
- npm (versión 6.x o superior)

### Instalación

1. **Clona el repositorio:**

   ```
   git clone https://github.com/LuisEnriqueChavarriaVazquez/reactChallenge.git
   cd reactChallenge
   ```

2. **Instala las dependencias:**

   ```
   npm run install
   ```

### Ejecutar el Proyecto en Desarrollo

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```
npm run start
```

Esto iniciará la aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en tu navegador. La página se recargará automáticamente si realizas cambios en el código.

### Ejecutar Pruebas

Para ejecutar las pruebas unitarias, usa el siguiente comando:

```
npm run test
```

Esto ejecutará todas las pruebas definidas en la carpeta `npm run test` utilizando Jest.

### Construir el Proyecto

Para construir la aplicación para producción, ejecuta el siguiente comando:

```
npm run build
```

Esto crea una versión optimizada de la aplicación en la carpeta `build`.

### Configuración Adicional

- **Configuración de Jest**: Si necesitas configurar Jest para pruebas adicionales, puedes modificar el archivo `jest.config.js` según tus necesidades.
- **Variables de Entorno**: Puedes configurar variables de entorno creando un archivo `.env` en la raíz del proyecto.

# Arquitectura del Proyecto

Este proyecto sigue una arquitectura modular por características, diseñada para mantener el código organizado y escalable. A continuación se describen las principales características de esta arquitectura.

## Estructura de Carpetas

La estructura del proyecto se organiza de la siguiente manera:

```plaintext
__mocks__/
├── fileMock.js
├── styleMock.js
└── swiperReactMock.js
build/
node_modules/
public/
src/
├── assets/
│   ├── img/
│   └── styles/
│       ├── resources/
│       ├── main.css
│       ├── main.css.map
│       └── main.scss
├── components/
│   ├── BankGrid.js
│   ├── BankIntroText.js
│   ├── BankList.js
│   ├── Footer.js
│   └── Navbar.js
├── context/
│   └── BankContext.js
├── services/
│   └── bankService.js
├── App.js
├── index.js
├── reportWebVitals.js
└── setupTests.js
Test/
├── app.test.js
├── bankContext.test.js
├── bankGrid.test.js
├── bankIntroText.test.js
├── bankList.test.js
├── bankService.test.js
├── footer.test.js
└── navbar.test.js
.gitignore
jest.config.js
package-lock.json
package.json
README.md
```

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

# Solución a CORS

Para este proyecto, he implementado un servidor proxy alojado en Vercel y un cliente React alojado en GitHub Pages. El servidor proxy en Vercel (https://react-challenge-server-theta.vercel.app/) maneja las solicitudes a la API proporcionada por Paga Todo (https://dev.obtenmas.com/catom/api/challenge/banks), mientras que el cliente en GitHub Pages (https://luisenriquechavarriavazquez.github.io/reactChallenge/) consume los datos de bancos a través del proxy. Esto asegura que el cliente pueda interactuar con la API de manera segura y eficiente. Todo esto para evitar problemas de CORS.

![Imagen del Proyecto](https://media.licdn.com/dms/image/D5612AQGHph0B6FKU3g/article-cover_image-shrink_600_2000/0/1712492130078?e=2147483647&v=beta&t=7WcM1i5d6y1ucEIshict3ApIkEUcNU9nu_davd7-WD8)