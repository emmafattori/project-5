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
		this.setState({
			nameOnPage: firstNameToAdd,
			showNameResults: true
		})

	}
	render() {
	
		return (
			<div className="welcome-component">

				
				<h1 id="title">
					{this.props.selectedLang === 'eng' ? 'Today\'s Plan' : "Plan du Jour"}
				</h1>
				
				<div className="enter-name">
					<form onSubmit={this.handleSubmitName} >
						<input className="text-input"type="text" name="name" id="name" placeholder="Enter Your Name"
						value={this.state.userFirstName} onChange={this.handleNameChange} autoComplete="off"/>
						<input className = "save-day" type="submit" value={this.props.selectedLang === 'eng' ? 'Submit' : 'Soumettre'}/>
					</form>
					<p>
						<span className="aria-label"role="img" alt="emoji of sun">☀️</span>
						{this.props.selectedLang === 'eng' ? 'Good Morning ' : 'Bon Matin '}{this.state.nameOnPage} 
					</p>
				</div>
			</div>
		);
	}
}

export default GoodMorning