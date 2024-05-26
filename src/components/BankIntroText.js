import React from "react";
/////////////Styles
import "../assets/styles/main.css";

function BankIntroText() {
	return (
		<React.Fragment>
			<div className="container__swiper__textIntro">
				<h1>React Challenge</h1>
				<p>
					En este challenge de react presenta una lista de bancos, los cuales
					pueden ser consumidos en{" "}
					<a href="https://dev.obtenmas.com/catom/api/challenge/banks">
						https://dev.obtenmas.com/catom/api/challenge/banks
					</a>
				</p>
			</div>
		</React.Fragment>
	);
}

export default BankIntroText;
