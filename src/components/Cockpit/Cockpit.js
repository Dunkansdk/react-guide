import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
	let btnClass = "";

	if (props.showPersons) {
		btnClass = classes.Red;
	}

	return (
		<div className={classes.Cockpit}>
			<h1>Im react app</h1>
			<button className={btnClass} onClick={props.clicked}>
				Switch Name
			</button>
		</div>
	);
};

export default cockpit;
