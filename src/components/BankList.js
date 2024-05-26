import React, { useContext, useRef, useState } from "react";
import { BankContext } from "../context/BankContext";

//Componentes
import BankIntroText from "../components/BankIntroText";

/////////////SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";

/////////////Styles
import "../assets/styles/main.css";


function BankList() {
	const { banks } = useContext(BankContext);

	return (
		<React.Fragment>
			{/* <div>
				{banks.map((bank) => (
					<div key={bank.bankName}>
						<h2>{bank.bankName}</h2>
						<p>{bank.description}</p>
						<p>{bank.age}</p>
						<img src={bank.url}></img>
					</div>
				))}
			</div> */}
            <section className="container__swiperFather">
                <div className="container__swiper">

                {/* Textos al costado de las cards de bancos */}
                <BankIntroText/>

                {/* Cards para los bancos */}
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
