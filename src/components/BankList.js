import React, { useContext } from "react";
import { BankContext } from "../context/BankContext";
import BankIntroText from "./BankIntroText";

// Importación de Swiper y sus estilos como antes
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

function BankList() {
    const { state: { banks, isLoading, error } } = useContext(BankContext);

    if (isLoading) {
        return <div>Cargando...</div>; // Puedes poner un spinner o algún indicador visual
    }

    if (error) {
        return <div>Error: {error}</div>; // Muestra el mensaje de error
    }

    return (
        <React.Fragment>
            <section className="container__swiperFather">
                <div className="container__swiper">
                    <BankIntroText/>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="swiper"
                    >
                        {banks.map((bank) => (
                            <SwiperSlide className="swiper__slide" key={bank.bankName}>
                                <h2 className="swiper__title">{bank.bankName}</h2>
                                <p className="swiper__description">{bank.description}</p>
                                <p className="swiper__age">Age: {bank.age}</p>
                                <div className="swiper__container">
                                    <div className="swiper__image" style={{ backgroundImage: `url(${bank.url})` }}></div>
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
