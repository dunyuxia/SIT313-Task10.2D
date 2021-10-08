import React from 'react'
import Navbar from "./Navbar";
import Propaganda from "./Propaganda";
import Experts from "./Experts";
import Footer from "./Footer";

class Homepage extends React.Component
{
	constructor(props)
	{
		super(props);
		document.title='Task 9.1HD - Home'
	}

	render()
	{
		return (
			<div className="App">
				<Navbar/>
				<Propaganda/>
				<Experts/>
				<Footer/>
			</div>
		);
	}
}

export default Homepage