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

	componentDidMount() {
		axios.get(api).then(res => {
			this.setState({ houses: res.data });
		});
	}

	render() {
		const houses =
			this.state.houses.length !== 0
				? this.state.houses.map(house => {
						return <House data={house} />;
				  })
				: "Loading";
		return (
			<div className="dashboard">
				{houses}
				<Link to="/wizard" className="add">
					Add New Property
				</Link>
			</div>
		);
	}
}

export default Dashboard;
