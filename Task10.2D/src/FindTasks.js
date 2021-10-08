import React from 'react'
import Navbar from "./Navbar";
import Propaganda from "./Propaganda";
import Footer from "./Footer";

import Tasks from "./Tasks";
import axios from "axios";

class FindTasks extends React.Component
{
	constructor(props)
	{
		super(props);
		document.title = 'Task 9.1HD - Find Tasks'
		this.state = { tasks: '' }
	}

	componentDidMount()
	{
		axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.get('http://localhost:3001/tasks')
			.then(res =>
			{
				this.setState({'tasks': res.data});
			})
			.catch(err =>
			{
				alert(err)
			})
	}

	render()
	{
		const { tasks } = this.state

		return (
			<div className="App">
				<Navbar/>
				<Propaganda/>
				<Tasks tasks ={tasks}/>
				<Footer/>
			</div>
		);
	}
}

export default FindTasks