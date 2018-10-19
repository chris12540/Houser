import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../../api";

import "./wizard.css";

class Wizard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			address: "",
			city: "",
			state: "",
			zip: ""
		};
	}

	update = (prop, e) => {
		this.setState({
			[prop]: e.target.value
		});
	};

	addProperty = () => {
		axios.post(api, this.state);
		this.setState({
			name: "",
			address: "",
			city: "",
			state: "",
			zip: ""
		});
		console.log("whyyyyyy");
	};

	render() {
		const { name, address, city, state, zip } = this.state;
		return (
			<div className="wizard">
				<input
					className="input"
					onChange={e => {
						this.update("name", e);
					}}
					placeholder="Property Name"
					type="text"
					value={name}
				/>
				<input
					className="input"
					onChange={e => {
						this.update("address", e);
					}}
					placeholder="Address"
					type="text"
					value={address}
				/>
				<input
					className="input"
					onChange={e => {
						this.update("city", e);
					}}
					placeholder="City"
					type="text"
					value={city}
				/>
				<input
					className="input"
					onChange={e => {
						this.update("state", e);
					}}
					placeholder="State"
					type="text"
					value={state}
				/>
				<input
					className="input"
					onChange={e => {
						this.update("zip", e);
					}}
					placeholder="ZIP"
					type="text"
					value={zip}
				/>
				<button className="submit" onClick={this.addProperty}>
					Submit
				</button>
				<Link to="/" className="cancel">
					Cancel
				</Link>
			</div>
		);
	}
}

export default Wizard;
