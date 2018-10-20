import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import api from "../../api.js";
import axios from "axios";
import "./dashboard.css";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			houses: []
		};
	}

	getHouses = () => {
		axios.get(api).then(res => {
			this.setState({ houses: res.data });
		});
	};

	deleteHouse = id => {
		axios.delete(`${api}/${id}`).then(() => {
			this.getHouses();
		});
	};

	componentDidMount() {
		this.getHouses();
	}

	render() {
		const houses =
			this.state.houses.length !== 0
				? this.state.houses.map((house, i) => {
						return <House key={i} data={house} deleteHouse={this.deleteHouse} />;
				  })
				: "Loading";
		return (
			<div className="dashboard">
				{houses}
				<Link to="/wizard/step1" className="add">
					Add New Property
				</Link>
			</div>
		);
	}
}

export default Dashboard;
