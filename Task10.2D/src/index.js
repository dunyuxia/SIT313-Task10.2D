import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from "./Homepage";
import SignUp from "./SignUp";
import {Route, Router} from "react-router-dom";
import {createBrowserHistory} from "history";

import 'semantic-ui-css/semantic.min.css'
import './style.css';

import PostTask from "./PostTask";
import FindTasks from "./FindTasks";
import SignIn from "./SignIn";

ReactDOM.render(
	<Router history={createBrowserHistory()}>
		<Route exact path={'.'} component={Homepage}/>
		<Route exact path={'/'} component={Homepage}/>
		<Route exact path={'/post_task'} component={PostTask}/>
		<Route exact path={'/find_tasks'} component={FindTasks}/>
		<Route exact path={'/sign_up'} component={SignUp}/>
		<Route exact path={'/sign_in'} component={SignIn}/>
	</Router>,
	document.getElementById('root')
);