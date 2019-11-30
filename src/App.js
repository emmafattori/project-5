import React, { Component } from 'react';
import firebase from './firebase.js';
import GoodMorning from './GoodMorning.js';
import AddPlan from './AddPlan.js';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
				userFirstName: '',
				userTaskItem: '', 
				dayPlan: []
				
			};
	}

	componentDidMount(){
		const dbRef = firebase.database().ref();
		dbRef.on('value', (snapshot) => {
			// console.log(snapshot.val());
			const dayPlan = snapshot.val();

			

			
		})

	}

	// Handle Event Functions for Name section only

	handleNameChange = (event) => {
		this.setState({
			userFirstName: event.target.value
		})
		console.log(this.state.userFirstName);
	}
	handleSubmitName = (event) => {
		event.preventDefault()
		const firstNameToAdd = this.state.userFirstName;
		console.log(firstNameToAdd)
	}



	render(){
  		return (
    		<div className="app-container">
				<h1>Plan Yo Life</h1>
				<GoodMorning />

				<AddPlan />

				<div className="planResults">
				
					
				</div>

    		</div>
  		);
	}
}
export default App;


