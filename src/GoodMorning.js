import React, { Component } from 'react';
import './App.css';

class GoodMorning extends Component {
	constructor(){
		super();
		this.state = {
				userFirstName: '',
				nameOnPage: '',
				
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
				<h1>Today's Plan</h1>
				<form onSubmit={this.handleSubmitName} >
					<input className="text-input"type="text" name="name" id="name" placeholder="Enter Your Name"
					value={this.state.userFirstName} onChange={this.handleNameChange} autoComplete="off"/>
					<input className = "save-day" type="submit" value="Submit"/>
				</form>
				<p><span className="aria-label"role="img" alt="emoji of sun">☀️</span>Good Morning {this.state.nameOnPage} </p>
			</div>
		);
	}
}

export default GoodMorning