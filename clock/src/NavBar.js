import React, {Component} from 'react';

export default class NavBar extends Component {
	render() {
		return(
			<h1 className="NavBar">
			{this.props.title}
			</h1>
			);
	}
}