import React, { Component } from 'react';
import './App.css';

 class AddPlan extends Component {
	 constructor(){
		 super();
		 this.state = {
			 planTitle: '',
			 titleOnPage: '',
			 showTitleResults: false

		 };
	 }



	handlePlanChange = (event) => {
		this.setState({
			planTitle: event.target.value
		})
		// console.log(this.state.planTitle);
	}

	handleSubmitTask = (event) => {
		event.preventDefault()
		const titleToAdd = this.state.planTitle;
		
		this.setState({
			titleOnPage: titleToAdd, 
			showNameResults: true
		
		})

		this.setState({
			planTitle: ''
		})
	}
	render() {
		return (
			
			<div className="day-schedule">
				<form onSubmit={this.handleSubmitTask}>

					<label htmlFor="planTitle">Enter a new plan for your bizzzzzy day </label>
					<input type="text" name="planTitle" id="planTitle" placeholder="Ex 2:00PM Eat a Donut" onChange={this.handlePlanChange} value={this.state.planTitle} autoComplete="off"/>
			
					<input type="submit" value="Add Item"/>
				</form>   

				{this.state.titleOnPage}
			</div>
		);
	}
}

export default AddPlan
