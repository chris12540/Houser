import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Header from "./components/Header/Header";
import routes from "./components/routes";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				{routes}
			</div>
		);
	}
}

export default App;
