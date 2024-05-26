import React from "react";
/////////////Styles
import "../assets/styles/main.css";

////////////Images
import logoPagaTodo from "../assets/img/logo.jpg"

function Footer() {
	return (
		<React.Fragment>
            <footer className="footer-container">
                <div className="footer-container__content">
                    <div className="footer-container__content__icon-container" id="footer_a1">
                        <div className="footer-container__icon-text">
                            <div className="footer-container__icon" style={{ backgroundImage: `url(${logoPagaTodo})` }}></div>
                            <div className="footer-container__text">Paga Todo</div>
                        </div>

                        <div className="footer-container__slogan">
                            <strong>Banco Paga Todo</strong>, es para todos.
                        </div>
                    </div>
                </div>
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
