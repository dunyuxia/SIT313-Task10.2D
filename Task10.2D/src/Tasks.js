import React from 'react'
import {Card, Form} from "semantic-ui-react";
import TaskCard from "./TaskCard";
import {DateInput} from "semantic-ui-calendar-react";

class Tasks extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = { date: '' }
	}

	onChange = (event, {name, value}) =>
	{
		this.setState({[name]: value});
	}

	render()
	{
		let param = this.props.tasks;

		if (this.state.date)
		{
			param = param.filter((p) => {
				return p.date.substr(0, 10) === this.state.date.substr(0, 10);
			});
		}

		let tasks;

		if (param)
		{
			tasks = param.map((task) => <TaskCard task={task}/>);
		}

		return (
			<div className={'seventy_percent_width tb_margin'}>
				<Form.Field name='date' label='Date' className={'form_content'} control={DateInput} placeholder="Date" iconPosition="left" onChange={this.onChange} required/>
				<h1>Tasks</h1>
				<Card.Group itemsPerRow={4}>
					{tasks}
				</Card.Group>
			</div>
		);
	}
}

export default Tasks
