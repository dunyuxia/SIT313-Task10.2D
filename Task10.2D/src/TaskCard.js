import React from 'react'
import {Button, Card, Divider, Image} from "semantic-ui-react";
import axios from "axios";

class TaskCard extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = { detailed: false }
	}

	onDetails = () =>
	{
		this.setState({'detailed': !this.state.detailed})
	}

	onDelete = (id) =>
	{
		axios.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.delete('http://localhost:3001/task/' + id)
			.then(res =>
			{
				if (res.data.success === true)
				{
					alert('Task deleted.');
					window.location = "/find_tasks"
				}
				else
				{
					alert(res.data["msg"])
				}
			})
			.catch(err =>
			{
				alert(err)
			})
	}

	render()
	{
		const task = this.props.task;

		return (
			<Card>
				<Image src={task.image} wrapped ui={false}/>
				<Card.Content>
					<Card.Header>{task.title}</Card.Header>
					{this.state.detailed && <Card.Description>{task.type}</Card.Description>}
					<Card.Description>{task.description}</Card.Description>
					<Card.Description>{task.suburb}</Card.Description>
					<Card.Description>{task.date}</Card.Description>
					{this.state.detailed && <Card.Description>{task.charging}</Card.Description>}
					{this.state.detailed && <Card.Description>{task.amount}</Card.Description>}
				</Card.Content>
				<Card.Content extra>
					<div className='ui two buttons'>
						<Button basic color='green' onClick={this.onDetails}>
							Details
						</Button>
						<Button basic color='red' onClick={()=>{this.onDelete(task._id)}}>
							Delete
						</Button>
					</div>
				</Card.Content>
			</Card>
		);
	}
}

export default TaskCard
