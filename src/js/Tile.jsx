import React, { Component } from "react";
import "./Tile.css";
import PropTypes from "prop-types";
export default class Tile extends Component {
	tileClick(props) {
		props.updateBoard(props.loc, props.turn);
	}
	render() {
		return (
			<div
				className={"tile " + this.props.loc}
				onClick={() => this.tileClick(this.props)}>
				<p>{this.props.value}</p>
			</div>
		);
	}
}
Tile.propTypes = {
	loc: PropTypes.number,
	turn: PropTypes.string,
	value: PropTypes.string
};
