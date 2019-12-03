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
				{/* Form for user to enter their first name */}
				<div className="enter-name">
					<form onSubmit={this.handleSubmitName} >

						<label htmlFor="name" className="visually-hidden"></label>
						<input className="text-input"type="text" name="name" id="name" placeholder="Name/Nom"
						value={this.state.userFirstName} onChange={this.handleNameChange} autoComplete="off"/>

						<label className="visually-hidden" htmlFor="submit plan">Submit Plan</label>
						<input className = "save-day" name="submit plan"type="submit" value={this.props.selectedLang === 'eng' ? 'Submit' : 'Soumettre'}/>
					</form>

					<p>
						<span className="visually-hidden good-morning"role="img" alt="emoji of sun">☀️</span> {this.state.nameOnPage}
					</p>
				</div>
			</div>
		);
	}
}

export default GoodMorning