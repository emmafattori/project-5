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

	// Function to handle name of user text input change
	handleNameChange = (event) => {
		this.setState({
			userFirstName: event.target.value
		})
		console.log(this.state.userFirstName);
	}

	// Function to handle user submitting name
	handleSubmitName = (event) => {
		event.preventDefault()
		const firstNameToAdd = this.state.userFirstName;
		if(this.props.selectedLang === 'eng'){
			this.setState({
				nameOnPage: 'Good Morning ' + firstNameToAdd
			})
		} else {
			this.setState({
				nameOnPage: 'Bon Matin ' + firstNameToAdd
			})
			
		}

	}

	// Render method
	render() {
	
		return (
			<div className="welcome-component">

				<h1 id="title">
					{this.props.selectedLang === 'eng' ? 'Today\'s Plan' : "Plan du Jour"}
				</h1>
				
				<div className="enter-name">
					<form onSubmit={this.handleSubmitName} >
						<input className="text-input"type="text" name="name" id="name" placeholder="Name/Nom"
						value={this.state.userFirstName} onChange={this.handleNameChange} autoComplete="off"/>
						<input className = "save-day" type="submit" value={this.props.selectedLang === 'eng' ? 'Submit' : 'Soumettre'}/>
					</form>
					<p>
						<span className="aria-label good-morning"role="img" alt="emoji of sun">☀️</span> {this.state.nameOnPage}
					</p>
				</div>
			</div>
		);
	}
}

export default GoodMorning