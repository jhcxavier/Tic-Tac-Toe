import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Announcement.css";
class Announcement extends Component {
	render() {
		return (
			<div className={this.props.winner ? "visible" : "hidden"}>
				<h2 className="">Game Over</h2>
			</div>
		);
	}
}
Announcement.propTypes = {
	winner: PropTypes.string
};
export default Announcement;
