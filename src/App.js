import React, { Component } from 'react';
import firebase from './firebase.js';
import GoodMorning from './GoodMorning.js';
import './App.css';

class App extends Component {
	constructor(){
		super();
		
		this.state = {
				userFirstName: '',
				plansList: [],
				userInput: ''
					
			};

	
	}

	componentDidMount(){
		const dbRef = firebase.database().ref();

		dbRef.on('value', (snapshot) => {
			const plans = snapshot.val();

			const newPlans = []
			for(let key in plans){
				// console.log(plans[key])
				const individualPlanObject = {
					planId: key, 
					planTitle: plans[key]
				}

				newPlans.push(individualPlanObject)
			}

			this.setState({
				plansList: newPlans
			})
		})
	}
	

	// Handle Event Functions for Name section only

	handleNameChange = (event) => {
		this.setState({
			userFirstName: event.target.value
		})
		// console.log(this.state.userFirstName);
	}
	handleSubmitName = (event) => {
		event.preventDefault()
		const firstNameToAdd = this.state.userFirstName;
		console.log(firstNameToAdd)
	}



	handleChangeTitle = (event) => {
		this.setState({
			userInput: event.target.value
		})
	}

	handlePlanSubmit = (event) => {
		event.preventDefault()

		const planToBeAdded = this.state.userInput;

		const dbRef = firebase.database().ref();
		if(this.state.userInput !== ''){

			dbRef.push(planToBeAdded)
			this.setState({
				userInput: ''
			})
		}
		console.log(planToBeAdded)
	
	}

		byeByeBookie = (event) => {
		console.log('delete you', event.target.id)
		const dbRef = firebase.database().ref();

		dbRef.child(event.target.id).remove()

	}

		deleteItem = (event) => {
		console.log('delete', event.target.id)
		const dbRef = firebase.database().ref();

		dbRef.child(event.target.id).remove()

	}

	render(){
  		return (
    		<div className="app-container">
				
				<GoodMorning />

				

				<div className="add-plan">
					<p>Add a plan to your schedule</p>


					  <form onSubmit={this.handlePlanSubmit}>
					  <label htmlFor="planTitle"></label>
					  <input className="text-input" id="planTitle" type="text" value={this.state.userInput} onChange={this.handleChangeTitle} autoComplete="off"/>
					  <button className="save-day" type="submit">Add Plan </button>
				 	  </form>
				</div>

				<div className="plan-result">
					<ul>
						{this.state.plansList.map( (planValue, i) => {
						//   console.log(bookValue);
						  return(
							  <li key={i}>{planValue.planTitle}<span id={planValue.planId} onClick={this.deleteItem}className="delete">X</span></li>
					  )
					  })}
					</ul>

				
				</div>

				
					<button className="save-day">Save</button>
				
				
    		</div>
  		);
	}
}
export default App;


