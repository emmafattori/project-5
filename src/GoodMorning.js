import React, { Component } from 'react';
import './App.css';

class GoodMorning extends Component {
	constructor(){
		super();
		this.state = {
				userFirstName: '',
				nameOnPage: '',
				showNameResults: false
				
			};
	}


	handleNameChange = (event) => {
		this.setState({
			userFirstName: event.target.value
		})
		console.log(this.state.userFirstName);
	}

	handleSubmitName = (event) => {
		event.preventDefault()
		const firstNameToAdd = this.state.userFirstName;
		// console.log(firstNameToAdd)
		this.setState({
			nameOnPage: firstNameToAdd,
			showNameResults: true
		})

	}

	render() {
		return (
			<div className="enter-name">
				<form onSubmit={this.handleSubmitName} className="enter-name">
					<input type="text" name="name" id="name" placeholder="Enter Your Name"
					value={this.state.userFirstName} onChange={this.handleNameChange} autoComplete="off"/>
					<input type="submit" value="Submit"/>
				</form>
				<p>☀️Good Morning {this.state.nameOnPage} </p>
			</div>
		);
	}
}

export default GoodMorning