import React, { Component } from 'react';
import './App.css';

 class AddPlan extends Component {
	 constructor(){
		 super();
		 this.state = {
			 planTitle: ''
		 }



	 }



	handlePlanChange = (event) => {
		this.setState({
			planTitle: event.target.value
		})
	}

	onSubmitTask = (event) => {
		event.preventDefault()
		const taskToAdd = this.setState.planTitle;
		this.setState({

		})
	}
	render() {
		return (
			
			<div className="day-schedule">
				<form onSubmit={this.onSubmitTask}>

					<label htmlFor="planTitle">Enter a new plan for your bizzzzzy day</label>
					<input type="text" name="planTitle" id="planTitle" placeholder="Ex 2:00PM Eat a Donut" onChange={this.handlePlanChange} value={this.state.planTitle}/>
			
					<input type="button" value="Add Item"/>
				</form>   

				<p>{this.state.taskToAdd}</p>
			</div>
		);
	}
}

export default AddPlan