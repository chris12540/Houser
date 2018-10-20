import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { update } from "../../../🦆🦆🦆/reducer";

const Step1 = props => {
	const { name, address, city, state, zip, dispatch } = props;
	return (
		<div>
			<input
				className="input"
				onChange={e => {
					dispatch(update("name", e.target.value));
				}}
				placeholder="Property Name"
				type="text"
				value={name}
			/>
			<input
				className="input"
				onChange={e => {
					dispatch(update("address", e.target.value));
				}}
				placeholder="Address"
				type="text"
				value={address}
			/>
			<input
				className="input"
				onChange={e => {
					dispatch(update("city", e.target.value));
				}}
				placeholder="City"
				type="text"
				value={city}
			/>
			<input
				className="input"
				onChange={e => {
					dispatch(update("state", e.target.value));
				}}
				placeholder="State"
				type="text"
				value={state}
			/>
			<input
				className="input"
				onChange={e => {
					dispatch(update("zip", e.target.value));
				}}
				placeholder="ZIP"
				type="text"
				value={zip}
			/>
			<Link className="next" to="/wizard/step2">
				Next Step
			</Link>
		</div>
	);
};

const mapStateToProps = redux => {
	const { name, address, city, state, zip } = redux;
	return { name, address, city, state, zip };
};

export default connect(mapStateToProps)(Step1);
