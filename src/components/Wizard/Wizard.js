import React from "react";
import { Route, Link } from "react-router-dom";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import { connect } from "react-redux";
import { reset } from "../../🦆🦆🦆/reducer";

import "./wizard.css";

function Wizard(props) {
	const { dispatch } = props;
	return (
		<div className="wizard">
			<Route path="/wizard/step1" component={Step1} />
			<Route path="/wizard/step2" component={Step2} />
			<Route path="/wizard/step3" component={Step3} />

			<Link to="/" className="cancel" onClick={dispatch(reset)}>
				Cancel
			</Link>
		</div>
	);
}

export default connect(null)(Wizard);
