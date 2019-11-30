import React, { Component } from 'react';
import './App.css';

 class AddPlan extends Component {
	 constructor(){
		 super();
		 this.state = {
			 planTitle: '',
			 planTime: '',
			 titleOnPage: '',
			 planOnPage: '',
			 dayPlan: []
		 };
	 }

	


	handlePlanChange = (event) => {
		this.setState({
			planTitle: event.target.value,
		})
	}

	handleTimeChange = (event) => {
		this.setState({
			planTime: event.target.value

		})
	}



	handleSubmitTask = (event) => {
		event.preventDefault()
		const titleToAdd = this.state.planTitle;
		const timeToAdd = this.state.planTime;
		this.setState({
			titleOnPage: titleToAdd, 
			timeOnPage: timeToAdd,
			showNameResults: true
		
		})

		this.setState({
			planTitle: '',
			planTime: ''
		})



		// const newDayPlan = []
		// 	for(let key in dayPlan){
		// 		console.log(dayPlan[key]);
		// 		const dayObject = {
		// 			timeId: key, 
		// 			planTitle: dayPlan[key]
		// 		}
		// 		newDayPlan.push(dayObject)

		// 	}

		// 	this.setState({
		// 		dayPlan: newDayPlan
		// 	})
	}
	render() {
		return (
			
			<div className="day-schedule">
				<form onSubmit={this.handleSubmitTask}>

					<p>Enter new item below and click submit to add to your bizzzzzzy day</p>

					<label htmlFor="time">Time of Day</label>
					<input type="text" name="time" id="time" onChange={this.handleTimeChange} value={this.state.planTime} autoComplete="off" placeholder="Ex: 10:00AM"/>

					<label htmlFor="planTitle">Enter a Item</label>
					<input type="text" name="planTitle" id="planTitle" placeholder="Ex 2:00PM Eat a Donut" onChange={this.handlePlanChange} value={this.state.planTitle} autoComplete="off"/>

			
					<input type="submit" value="Add Item"/>
				</form>   
				<section className="day-results">
					<div className="day-item">
						

						<p>{this.state.timeOnPage}</p>
						<p>{this.state.titleOnPage}</p>	
					</div>
					
				</section>
			</div>
		);
	}
}

export default AddPlan
