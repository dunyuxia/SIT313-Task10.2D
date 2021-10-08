import React from 'react'
import {Card, Icon, Image} from "semantic-ui-react";

class ExpertCard extends React.Component
{
	render()
	{
		const expert = this.props.expert;

		return (
			<Card>
				<Image src={expert.portrait} wrapped ui={false}/>
				<Card.Content>
					<Card.Header>{expert.name}</Card.Header>
					<Card.Description>
						{expert.description}
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Icon name='star'/>
					<Icon name='star'/>
					<Icon name='star'/>
					<Icon name='star'/>
					<Icon name='star'/>
				</Card.Content>
			</Card>
		);
	}
}

export default ExpertCard
