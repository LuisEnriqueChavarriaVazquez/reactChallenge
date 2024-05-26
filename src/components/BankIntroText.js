import React from "react";
// Importa estilos globales.
import "../assets/styles/main.css";

/**
 * Componente BankIntroText que proporciona un texto introductorio para la lista de bancos.
 * Este componente presenta un reto de React y enlaza a la API de donde se consumen los datos.
 * @returns {JSX.Element} Elemento de React que representa el texto introductorio.
 */
function BankIntroText() {
    // Se utiliza React.Fragment para evitar añadir nodos DOM extra, manteniendo la estructura limpia.
    return (
        <React.Fragment>
            <div className="container__swiper__textIntro">
                <h1>React Challenge</h1>
                <p>
                    En este challenge de react presenta una lista de bancos, los cuales
                    pueden ser consumidos en{" "}
                    {/* Protege el enlace asegurando que sea seguro y controlando dónde se abre.
                        # noopener es para evitar que la página tenga acceso al contexto de la página de origen
                        # noreferrer es para evitar que la pagina a donde vamos reciba informacion sobre el origen por medio
                        del encabezado de HTTP referer

                        Con esto el otro lado no sabe desde donde se realizó el enlace
                    */}
                    <a href="https://dev.obtenmas.com/catom/api/challenge/banks" target="_blank" rel="noopener noreferrer">
                        Datos de bancos
                    </a>
                </p>
            </div>
        </React.Fragment>
    );
}

export default BankIntroText;

