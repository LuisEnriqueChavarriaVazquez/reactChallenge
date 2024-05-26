import React, { useContext } from "react";
import { BankContext } from "../context/BankContext";

function BankGrid() {
    const { state: { banks, isLoading, error } } = useContext(BankContext);

    if (isLoading) {
        return <div>Cargando...</div>; // Visual para carga
    }

    if (error) {
        return <div>Error: {error}</div>; // Manejo de errores
    }

    return (
        <React.Fragment>
            <section className="bank-container-grid">
                <div className="bank-container-grid__grid">
                    <div className="bank-container-grid__items">
                        {banks.map((bank) => (
                            <div className="bank-container-grid__item" key={bank.bankName}>
                                <div className="bank-container-grid__imageContainer">
                                    <img src={bank.url} className="bank-container-grid__image" alt={bank.bankName} />
                                </div>
                                <div className="bank-container-grid__info">
                                    <p className="bank-container-grid__name">{bank.bankName}</p>
                                    <p className="bank-container-grid__description">{bank.description}</p>
                                    <p className="bank-container-grid__age">Age: {bank.age}</p>
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