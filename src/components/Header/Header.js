import React from "react";
import Logo from "../../images/houser_logo.png";
import "./header.css";

const Header = () => {
	return (
		<header>
			<div>
				<img src={Logo} alt="Logo" className="logo" />
				<h1>Houser</h1>
			</div>
		</header>
	);
};

export default Header;
