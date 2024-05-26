import React, { useContext } from "react";
import { BankContext } from "../context/BankContext";

/**
 * Componente BankGrid que muestra una cuadrícula de bancos utilizando datos desde el contexto de BankContext.
 * Implementa carga condicional y manejo de errores.
 * @returns {JSX.Element} Elemento de React que representa la cuadrícula de bancos o mensajes de estado.
 */
function BankGrid() {
    // Utiliza el contexto para acceder a los datos de los bancos, el estado de carga y errores.
    const { state: { banks, isLoading, error } } = useContext(BankContext);

    // Muestra un mensaje de carga si los datos aún están cargando.
    if (isLoading) {
        return <div>Cargando...</div>; // Idealmente, se podría usar un componente spinner.
    }

    // Muestra un mensaje de error si hay un error en la carga de los datos.
    if (error) {
        return <div>Error: {error}</div>; // Muestra el mensaje de error obtenido.
    }

    return (
        <React.Fragment>
            <section className="bank-container-grid">
                <div className="bank-container-grid__grid">
                    <div className="bank-container-grid__items">
                        {/* Mapea cada banco a un elemento de la cuadrícula. */}
                        {banks.map((bank) => (
                            <div className="bank-container-grid__item" key={bank.bankName}>
                                <div className="bank-container-grid__imageContainer">
                                    {/* Asegura que cada imagen tenga un atributo alt adecuado para accesibilidad y SEO. */}
                                    <img src={bank.url} className="bank-container-grid__image" alt={bank.bankName} />
                                </div>
                                <div className="bank-container-grid__info">
                                    <p className="bank-container-grid__name">{bank.bankName}</p>
                                    <p className="bank-container-grid__description">{bank.description}</p>
                                    <p className="bank-container-grid__age">Edad: {bank.age}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default BankGrid;
