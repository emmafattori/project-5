import React, { Component } from 'react';
import firebase from './firebase.js';
import GoodMorning from './GoodMorning';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



class App extends Component {
	constructor(){
		super();
		
		this.state = {
				userFirstName: '',
				plansList: [],
				userInput: '',
				userPlansList: []
					
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
		
		if(this.state.userInput !== '' && this.state.plansList.length <= 5){

			dbRef.push(planToBeAdded)
			this.setState({
				userInput: ''
			})
		} else {
			
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
// Function to remove the item from the page & firebase if button is clicked
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
							  <div className="plan-item">
							 	 <li key={i}>{planValue.planTitle}</li><span className="delete"><i className="far fa-trash-alt" id={planValue.planId} onClick={this.deleteItem}></i>
								  </span>

							  </div>
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


