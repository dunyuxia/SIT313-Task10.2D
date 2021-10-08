import React from 'react'
import {Button, ButtonGroup, Icon, Input, Label} from "semantic-ui-react";

class Footer extends React.Component
{
	render()
	{
		return (
			<div className={'footer seventy_percent_width deakin_green tb_margin tb_padding'}>
				<Label>
					NEWSLETTER SIGN
				</Label>
				<Input placeholder={'Enter your email'}/>
				<Button>Subscribe</Button>
				<Label>
					Connect Us
				</Label>
				<ButtonGroup>
					<Button icon>
						<Icon name={'facebook'} />
					</Button>
					<Button icon>
						<Icon name={'twitter'} />
					</Button>
					<Button icon>
						<Icon name={'instagram'} />
					</Button>
				</ButtonGroup>
			</div>
		);
	}
}

export default Footer