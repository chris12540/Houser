import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../../../api";
import { connect } from "react-redux";
import { update } from "../../../🦆🦆🦆/reducer";

const Step3 = props => {
	const { name, address, city, state, zip, mortgage, rent, img, dispatch } = props;
	let addProperty = () => {
		axios.post(api, { name, address, city, state, zip, mortgage, rent, img });
		window.location.replace("/");
	};

	return (
		<div>
			<h1>Mortgage:</h1>
			<input
				value={mortgage}
				onChange={e => {
					dispatch(update("mortgage", e.target.value));
				}}
				type="text"
				className="input"
			/>
			<h1>Rent:</h1>
			<input
				value={rent}
				onChange={e => {
					dispatch(update("rent", e.target.value));
				}}
				type="text"
				className="input"
			/>
			<button className="submit" onClick={addProperty}>
				Submit
			</button>
			<Link className="previous" to="/wizard/step2">
				Previous Step
			</Link>
		</div>
	);
};

const mapStateToProps = state => {
	return { ...state };
};

export default connect(mapStateToProps)(Step3);
