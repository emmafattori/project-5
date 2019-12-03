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
				selectedLang: 'eng',
				inputLabel: {

					'eng' :{
						title: "Today's Plan", 
						morning: "Good Morning",
						submitName: "Submit",
						newPlan: "Add new plan",
						planButton: "Add", 
						langButton: "FR"
					}, 
					'fr': {
						title: "Plan du Jour",
						morning: "Bon Matin",
						submitName: "Soumettre",
						newPlan: "Ajouter un plan à votre journée",
						planButton: "Ajouter",
						langButton: "EN"
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
			// Error handling: user will get an alert if they have too many plans in one day.
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
// Function to remove the item from the page & firebase if garbage can icon is clicked
	deleteItem = (event) => {
		const dbRef = firebase.database().ref();
		dbRef.child(event.target.id).remove()
	}

// Function to change the copy language based on the user's button click.
	languageToggle = (event) => {
		event.preventDefault()

		if(this.state.selectedLang === 'eng'){
			this.setState({
			selectedLang: 'fr'
		})
		} else{
			this.setState({
				selectedLang: 'eng'
			})
		}

	}
// Render Method

	render(){
		
  		return (
		
    		<div className="app-container">
				{/* Imported Component "Good Morning" */}
				<GoodMorning selectedLang = {this.state.selectedLang}/>

				{/* Button for toggling French Copy */}
				
				<button onClick={this.languageToggle}className="french-button" id="langButton">{this.state.inputLabel[this.state.selectedLang].langButton}</button>

				{/* Add new plan section */}
				<div className="add-plan">		
					<p id="add">
						{this.state.inputLabel[this.state.selectedLang].newPlan}</p>


					  <form onSubmit={this.handlePlanSubmit}>
					  <label htmlFor="planTitle"></label>
					  <input className="text-input" id="planTitle" type="text" value={this.state.userInput} placeholder="Ex: Call Mom/Appelez Maman"onChange={this.handleChangeTitle} autoComplete="off"/>
					  <button id="planButton"className="save-day" type="submit">{this.state.inputLabel[this.state.selectedLang].planButton}</button>
				 	  </form>
				</div>

				{/* List of plans section */}
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

    		</div>

  		);

	}
}
export default App;


