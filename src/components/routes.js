import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Wizard from "./Wizard/Wizard";

export default (
	<Switch>
		<Route path="/wizard" component={Wizard} />
		<Route path="/" component={Dashboard} />
	</Switch>
);
