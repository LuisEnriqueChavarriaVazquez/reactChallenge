import React from "react";
/////////////Styles
import "../assets/styles/main.css";

////////////Images
import logoPagaTodo from "../assets/img/logo.jpg"

function Navbar() {
	return (
		<React.Fragment>
            <nav className="navigation">
                <div className="navigation__container">
                    <div className="navigation__brand">
                        <div className="navigation__logo" style={{ backgroundImage: `url(${logoPagaTodo})` }}></div>
                        <div className="navigation__name">Paga Todo</div>
                    </div>

                    <div className="navigation__slogan">
                        <strong>Banco PagaTodo</strong>, es para todos.
                    </div>
                </div>
            </nav>
		</React.Fragment>
	);
}

export default Navbar;
