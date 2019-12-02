import React, { Component } from 'react';
import firebase from './firebase.js';
import GoodMorning from './GoodMorning';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



class App extends Component {
	constructor(){
		super();
		
		this.state = {
				userFirstName: '',
				plansList: [],
				userInput: '',
				userLang: {
					"welcome": {
						"en": "Today's Plan",
						"fr": "Plan du jour"
					}, 

					"good-morning": {
						"en": "Good Morning",
						"fr": "Bon Matin"
					},

					"new-plan": {
						"en": "Add a plan to your schedule", 
						"fr": "Ajouter un plan à votre jour"
					}, 

					"add-button": {
						"en": "Add Plan",
						"fr": "Ajoutez"
					}
				}			
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

// Function to handle when each plan is added into the list
	handlePlanSubmit = (event) => {
		event.preventDefault()
		const planToBeAdded = this.state.userInput;
		const dbRef = firebase.database().ref();
		
		if(this.state.userInput !== '' && this.state.plansList.length <= 5){

			dbRef.push(planToBeAdded)
			this.setState({
				userInput: ''
			})
		} else {
			const MySwal = withReactContent(Swal)
			// user will get an alert if they have too many plans in one day.
			MySwal.fire({
 				 onOpen: () => {
    				MySwal.clickConfirm()
  				}
			}).then(() => {
				
  				return MySwal.fire({
					  title: "Hello Planner!",
					  icon: "warning",
					  text: "It seems like you have a busy day already. Let's prioritize your list so that you can have a balanced day ☮️."
				  })
			})	
		}
	}
// Function to remove the item from the page & firebase if garbage can button is clicked
	deleteItem = (event) => {
		// console.log('delete', event.target.id)
		const dbRef = firebase.database().ref();
		dbRef.child(event.target.id).remove()
	}

		languageToggle = (event, idName) => {
		event.preventDefault()
		// console.log('this is French now')
		const frenchLabel = {
			title: "Plan du Jour",
			morning: "Bon Matin",
			submitName: "Soumettre",
			newPlan: "Ajouter un plan à votre journée",
			planButton: "Ajouter",
			langButton: "EN"		
		}

		document.getElementById('add').innerHTML = frenchLabel.newPlan;
		document.getElementById('planButton').innerHTML = frenchLabel.planButton;
		document.getElementById('langButton').innerHTML = frenchLabel.langButton;
	}




	render(){
		
  		return (
		
    		<div className="app-container">
				{/* Imported component "Good Morning" */}
				<GoodMorning />
				{/* Button for toggling French App */}
				
				<button onClick={this.languageToggle}className="french-button" id="langButton">FR</button>

				<div className="add-plan">

					
					<p id="add">
						Add a plan to your schedule</p>


					  <form onSubmit={this.handlePlanSubmit}>
					  <label htmlFor="planTitle"></label>
					  <input className="text-input" id="planTitle" type="text" value={this.state.userInput} onChange={this.handleChangeTitle} autoComplete="off"/>
					  <button id="planButton"className="save-day" type="submit">Add Plan</button>
				 	  </form>
				</div>

				<div className="plan-result">
					<ul>
						{this.state.plansList.map( (planValue, i) => {
						  return(
							  <div className="plan-item">
							 	 <li key={i}>{planValue.planTitle}</li><span className="delete"><i className="far fa-trash-alt" id={planValue.planId} onClick={this.deleteItem}></i>
								  </span>

							  </div>
					  		)
					  })}
					</ul>
				</div>

				{/* <button className="save-day" onClick={this.saveEntireDay}>Save</button> */}

    		</div>

  		);

	}

}
export default App;


