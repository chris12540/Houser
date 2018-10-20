import React from "react";
import deleteImg from "../../images/delete_button.png";

import "./house.css";

const House = props => {
	const { id, img, name, address, city, state, zip, mortgage, rent } = props.data;
	return (
		<div className="house">
			<img className="house-img" src={img} alt="House" />
			<div className="house-description">
				<h1 className="house-name">Property Name: {name}</h1>
				<h1 className="house-address">Address: {address}</h1>
				<h1 className="house-city">City: {city}</h1>
				<h1 className="house-state">State: {state}</h1>
				<h1 className="house-zip">ZIP: {zip}</h1>
			</div>
			<div className="house-money">
				<h1 className="house-mortgage">Monthly Mortgage: {mortgage}</h1>
				<h1 className="house-rent">Desired Rent: {rent}</h1>
			</div>
			<img
				className="delete-house"
				src={deleteImg}
				alt="Delete"
				onClick={() => {
					props.deleteHouse(id);
				}}
			/>
		</div>
	);
};

export default House;
