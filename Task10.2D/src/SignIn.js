import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import axios from 'axios';

import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

import {Button, Form, Input} from "semantic-ui-react"

import {initializeApp} from "firebase/app";

class SignIn extends React.Component
{
	constructor(props)
	{
		super(props);
		document.title = 'Task 9.1HD - Sign In'
		this.state = {email: '', password: ''}
	}

	onChange = (event, {name, value}) =>
	{
		if (this.state.hasOwnProperty(name))
		{
			this.setState({[name]: value});
		}
	}

	onGoogle = () =>
	{
		// Your web app's Firebase configuration
		const firebaseConfig = {
			apiKey: "AIzaSyDW92gG2RD6Ml5WldfmEjAhYq-Xc3epoXk",
			authDomain: "sit313-bb961.firebaseapp.com",
			projectId: "sit313-bb961",
			storageBucket: "sit313-bb961.appspot.com",
			messagingSenderId: "126717281120",
			appId: "1:126717281120:web:f3857a583c88ad01ee1405"
		};

// Initialize Firebase
// 		const app = initializeApp(firebaseConfig);
		initializeApp(firebaseConfig);

		const provider = new GoogleAuthProvider();
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then((result) =>
			{
				// This gives you a Google Access Token. You can use it to access the Google API.
				// const credential = GoogleAuthProvider.credentialFromResult(result);
				GoogleAuthProvider.credentialFromResult(result);
				// const token = credential.accessToken;
				// // The signed-in user info.
				// const user = result.user;

				alert('You are signed in as ' + result.user.email)
				window.location = "/"
			}).catch((error) =>
		{
			// Handle Errors here.
			// const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			// const email = error.email;
			// The AuthCredential type that was used.
			// const credential = GoogleAuthProvider.credentialFromError(error);
			GoogleAuthProvider.credentialFromError(error);
			// ...
			alert(errorMessage)
		});
	}

	onSubmit = () =>
	{
		const {email, password} = this.state

		axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.get('http://localhost:3001/account', {params: {email: email, password: password}})
			.then(res =>
			{
				if (res.data.success === true)
				{
					alert("You are signed in.")
					window.location = "/"
				}
				else
				{
					alert("Sign-In failed.")
				}
			})
			.catch(err =>
			{
				alert(err)
			})
	}

	render()
	{
		return (
			<div className="App">
				<Navbar/>
				<div className="seventy_percent_width tb_margin">
					<h1>Customer Login</h1>
					<Form onSubmit={this.onSubmit}>
						<Form.Field name={'email'} onChange={this.onChange} control={Input} label='Email' placeholder='E-Mail' required/>
						<Form.Field name={'password'} onChange={this.onChange} control={Input} type={'password'} label='Password' placeholder='Password' required/>
						<Button className={'btn'} type='submit'>Sign in</Button>
					</Form>
					<br/>
					<Button className={'btn'} onClick={this.onGoogle}>Sign in with Google</Button>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default SignIn
