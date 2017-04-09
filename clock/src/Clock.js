import React, {Component} from 'react';

export default class Clock extends Component {
	constructor(props) {
		super(props);
		this.updateTime = this.updateTime.bind(this);
		this.state = {
			date: new Date()
		};
	}

	updateTime() {
		this.setState({
			date: new Date()
		});
	}
	
	render() {
		return(
			<div className="Clockwerk">
				{this.state.date.toLocaleTimeString()}
			</div>
			);
	}

	componentDidMount() {
		setInterval(this.updateTime, 1000);
	}

}