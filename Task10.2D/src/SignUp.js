import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import axios from 'axios';

import {Button, Form, Input} from "semantic-ui-react"

class SignUp extends React.Component
{
	constructor(props)
	{
		super(props);

		document.title='Task 9.1HD - Sign Up'

		this.state = {
			country: 'Australia',
			firstname: '',
			lastname: '',
			email: '',
			password: '',
			confirm_password: '',
			address: '',
			city: '',
			state: '',
			postalCode: '',
			mobile: ''}
	}

	onChange  = (event, {name, value}) =>
	{
		if (this.state.hasOwnProperty(name))
		{
			this.setState({[name]: value});
		}
	}

	onSubmit = () =>
	{
		const { country, firstname, lastname, email, password, confirm_password, address, city, state, postalCode, mobile } = this.state

		if (password !== confirm_password)
		{
			alert("Password must be the same")
			return
		}

		const data = {
			country: country,
			firstname: firstname,
			lastname: lastname,
			email: email,
			password: password,
			address: address,
			city: city,
			state: state,
			postalCode: postalCode,
			mobile: mobile }

		axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.put('http://localhost:3001/account', data)
			.then(res =>
			{
				if (res.data.success === true)
				{
					alert('You are signed into iService.');
					window.location = "/"
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
		const countryOptions = [
			{key: 'cn', value: 'China', flag: 'cn', text: 'China'},
			{key: 'ru', value: 'Russia', flag: 'ru', text: 'Russia'},
			{key: 'us', value: 'United States', flag: 'us', text: 'United States'},
			{key: 'uk', value: 'United Kingdom', flag: 'uk', text: 'United Kingdom'},
			{key: 'fr', value: 'France', flag: 'fr', text: 'France'},
			{key: 'au', value: 'Australia', flag: 'au', text: 'Australia'},
			{key: 'nz', value: 'New Zealand', flag: 'nz', text: 'New Zealand'},
			{key: 'ar', value: 'Argentina', flag: 'ar', text: 'Argentina'},
			{key: 'de', value: 'German', flag: 'de', text: 'German'}]

		return (
			<div className="App">
				<Navbar/>
				<div className="seventy_percent_width tb_margin">
					<h1>Customer Registration</h1>
					<h2>Create an iService Account</h2>

					<Form onSubmit={this.onSubmit}>
						<Form.Field className={'form-control'} required>
							<label form={'dd'}>Country of residence</label>
							<Form.Dropdown name={'country'} onChange={this.onChange} placeholder='Select your country' fluid selection options={countryOptions} defaultValue={countryOptions[0].value}/>
						</Form.Field>
						<Form.Group widths='equal'>
							<Form.Input name={'firstname'} onChange={this.onChange} fluid label='First name' placeholder='Firstname' required/>
							<Form.Input name={'lastname'} onChange={this.onChange} fluid label='Last name' placeholder='Lastname' required/>
						</Form.Group>
						<Form.Field name={'email'} onChange={this.onChange} control={Input} label='Email' placeholder='E-Mail' required/>
						<Form.Group widths='equal'>
							<Form.Input name={'password'} onChange={this.onChange} fluid label='Password' type={'password'} placeholder='Password' required/>
							<Form.Input name={'confirm_password'} onChange={this.onChange} fluid label='Confirm password' placeholder='Confirm password' type={'password'} required/>
						</Form.Group>
						<Form.Field name={'address'} onChange={this.onChange} control={Input} label='Address' placeholder='Address' required/>
						<Form.Group widths='equal'>
							<Form.Input name={'city'} onChange={this.onChange} fluid label='City' placeholder='City' required/>
							<Form.Input name={'state'} onChange={this.onChange} fluid label='State, Province or Region' placeholder='State, Province or Region' required/>
						</Form.Group>
						<Form.Field name={'postalCode'} onChange={this.onChange} control={Input} label='ZIP / Postal code' placeholder='ZIP / Postal code' required/>
						<Form.Field name={'mobile'} onChange={this.onChange} control={Input} label='Mobil phone number' placeholder='Mobil phone number' required/>
						<Button type='submit'>Sign up</Button>
					</Form>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default SignUp
