import React from "react";
// Importa los estilos principales para la barra de navegación.
import "../assets/styles/main.css";
// Importa la imagen del logo de Paga Todo.
import logoPagaTodo from "../assets/img/logo.jpg"

/**
 * Componente Navbar que muestra la barra de navegación con el logo y el eslogan.
 * Utiliza un fragmento de React para evitar nodos DOM adicionales innecesarios.
 * @returns {JSX.Element} Elemento de React que representa la barra de navegación.
 */
function Navbar() {
    // Asegura que el logo está disponible y maneja la falta del mismo.
    const logoStyle = logoPagaTodo ? { backgroundImage: `url(${logoPagaTodo})` } : { backgroundImage: `url(https://media.licdn.com/dms/image/C560BAQEKgeZdPYqfEA/company-logo_200_200/0/1653929400196/pagatodo_logo?e=2147483647&v=beta&t=taX3pTovtApZbE2L18YC3O1S-nhKaH03KzTFUi5N68A)` };

	return (
		<React.Fragment>
            <nav className="navigation">
                <div className="navigation__container">
                    <div className="navigation__brand">
                        {/* Configura el logo como fondo si está disponible y muestra el nombre del banco. */}
                        <div className="navigation__logo" style={logoStyle}></div>
                        <div className="navigation__name">Paga Todo</div>
                    </div>
                    {/* Muestra el eslogan del banco, resaltando la inclusividad del servicio. */}
                    <div className="navigation__slogan">
                        <strong>Banco Paga Todo</strong>, es para todos.
                    </div>
                </div>
            </nav>
		</React.Fragment>
	);
}

export default Navbar;
