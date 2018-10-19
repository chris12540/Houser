import React from "react";

const House = props => {
	const { name, address, city, state, zip } = props.data;
	return (
		<div>
			<h1>{name}</h1>
			<h1>{address}</h1>
			<h1>{city}</h1>
			<h1>{state}</h1>
			<h1>{zip}</h1>
		</div>
	);
};

export default House;
