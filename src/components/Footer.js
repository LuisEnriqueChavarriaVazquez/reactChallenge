import React from "react";
// Importa estilos principales para el pie de página.
import "../assets/styles/main.css";
// Importa la imagen del logo de Paga Todo.
import logoPagaTodo from "../assets/img/logo.jpg";

/**
 * Componente Footer que muestra el pie de página con logo y eslogan.
 * Utiliza React.Fragment para evitar la creación de nodos DOM extra.
 * @returns {JSX.Element} Elemento de React que representa el pie de página.
 */
function Footer() {
    // Estilo para el logo, se verifica que la imagen esté disponible para evitar errores.
    const logoStyle = logoPagaTodo ? { backgroundImage: `url(${logoPagaTodo})` } : { backgroundImage: `url(https://media.licdn.com/dms/image/C560BAQEKgeZdPYqfEA/company-logo_200_200/0/1653929400196/pagatodo_logo?e=2147483647&v=beta&t=taX3pTovtApZbE2L18YC3O1S-nhKaH03KzTFUi5N68A)` };

    return (
        <React.Fragment>
            <footer className="footer-container">
                <div className="footer-container__content">
                    <div className="footer-container__content__icon-container" id="footer_a1">
                        <div className="footer-container__icon-text">
                            {/* Aplica el logo como fondo si está disponible, mostrando el nombre de la empresa. */}
                            <div className="footer-container__icon" style={logoStyle}></div>
                            <div className="footer-container__text">Paga Todo</div>
                        </div>

                        {/* Muestra el eslogan de la empresa, reforzando su mensaje de inclusividad. */}
                        <div className="footer-container__slogan">
                            <strong>Banco Paga Todo</strong>, es para todos.
                        </div>
                    </div>
                </div>
                {/* Área de derechos de autor para proteger la propiedad intelectual de la empresa. */}
                <div className="footer-container__copyright">
                    <label htmlFor="modal-copyright" className="footer-container__label">
                        Copyright &#169; Paga Todo - <i>Todos los derechos reservados</i>
                    </label>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
