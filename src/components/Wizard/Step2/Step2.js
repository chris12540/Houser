import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { update } from "../../../🦆🦆🦆/reducer";

const Step2 = props => {
	const { img, dispatch } = props;
	return (
		<div>
			<h1>Image URL</h1>
			<input
				className="input"
				type="text"
				onChange={e => {
					dispatch(update("img", e.target.value));
				}}
				value={img}
			/>
			<Link className="previous" to="/wizard/step1">
				Previous Step
			</Link>
			<Link className="next" to="/wizard/step3">
				Next Step
			</Link>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		img: state.img
	};
};

export default connect(mapStateToProps)(Step2);
