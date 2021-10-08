import React from 'react'
import ExpertCard from "./ExpertCard";
import {Card} from "semantic-ui-react";
import faker from "faker";

class Experts extends React.Component
{
	render()
	{
		let picusm = 'https://picsum.photos/160/90?random=';
		const array = [
			{portrait: picusm + 0, name: faker.name.findName(), description: faker.name.jobDescriptor()},
			{portrait: picusm + 1, name: faker.name.findName(), description: faker.name.jobDescriptor()},
			{portrait: picusm + 2, name: faker.name.findName(), description: faker.name.jobDescriptor()},
			{portrait: picusm + 3, name: faker.name.findName(), description: faker.name.jobDescriptor()},
			{portrait: picusm + 4, name: faker.name.findName(), description: faker.name.jobDescriptor()},
			{portrait: picusm + 5, name: faker.name.findName(), description: faker.name.jobDescriptor()},
			{portrait: picusm + 6, name: faker.name.findName(), description: faker.name.jobDescriptor()},
			{portrait: picusm + 7, name: faker.name.findName(), description: faker.name.jobDescriptor()}]
		const experts = array.map((expert) => <ExpertCard expert={expert}/>);

		return (
			<div className={'seventy_percent_width tb_margin'}>
				<h1>Featured Experts</h1>
				<Card.Group itemsPerRow={4}>
					{experts}
				</Card.Group>
			</div>
		);
	}
}

export default Experts
