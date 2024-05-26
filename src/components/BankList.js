import React, { useContext } from "react";
import { BankContext } from "../context/BankContext";
import BankIntroText from "./BankIntroText";

// Importa Swiper y sus estilos necesarios.
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

/**
 * Componente BankList que muestra una lista de bancos usando un carrusel.
 * Utiliza el contexto BankContext para acceder al estado de la lista de bancos.
 * @returns {JSX.Element} Elemento de React que representa la lista de bancos o mensajes de estado.
 */
function BankList() {
    const { state: { banks, isLoading, error } } = useContext(BankContext);

    // Muestra un mensaje de carga mientras se espera por los datos.
    if (isLoading) {
        return <div>Cargando...</div>; // Idealmente, usaría un spinner o un componente de carga.
    }

    // Muestra un mensaje de error si la carga de datos falla.
    if (error) {
        return <div>Error: {error}</div>; // Muestra el mensaje de error específico.
    }

    return (
        <React.Fragment>
            <section className="container__swiperFather">
                <div className="container__swiper">
                    {/* Componente para el texto introductorio de los bancos */}
                    <BankIntroText/>
                    <Swiper
                        effect={'cards'} // Usa el efecto de tarjetas para el carrusel.
                        grabCursor={true} // Permite que el cursor 'agarre' el carrusel para una mejor interactividad.
                        modules={[EffectCards]} // Carga el módulo necesario para el efecto de tarjetas.
                        className="swiper"
                    >
                        {/* Mapea cada banco a un slide en el carrusel. */}
                        {banks.map((bank) => (
                            <SwiperSlide className="swiper__slide" key={bank.bankName}>
                                <h2 className="swiper__title">{bank.bankName}</h2>
                                <p className="swiper__description">{bank.description}</p>
                                <p className="swiper__age">Edad: {bank.age}</p>
                                <div className="swiper__container">
                                    {/* Imagen del banco como fondo. Verifica si la URL es válida antes de usarla. */}
                                    <div className="swiper__image" style={{ backgroundImage: `url(${bank.url ? bank.url : 'path/to/default/image.jpg'})` }}></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </React.Fragment>
    );
}

export default BankList;
