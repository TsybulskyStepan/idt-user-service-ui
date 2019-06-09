import React from 'react';
import {Route} from "react-router-dom";

import Grid from '@material-ui/core/Grid';

import UserPage from "../UserPage";

import './styles.scss';

export default class Router extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="appWrapper">
				<Grid container justify="center" spacing={1}>
					<Route path="/" component={UserPage} title="IDT users"/>
				</Grid>
			</div>
		);
	}
}

