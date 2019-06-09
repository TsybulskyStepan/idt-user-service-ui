import React from 'react';
import { connect } from 'react-redux';
import {loadUsers} from "./actions";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class UserPageContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.loadUsers();
	}

	render() {
		const { users } = this.props;
		return (
			<React.Fragment>
				{
					users && users.map(user => 
						<Grid key={user.id} item xs={4}>
							<Paper>{user.name}</Paper>
						</Grid>
					)
				}
			</React.Fragment>
		);
	}
}

const UserPage = connect(
	state => {
		return {
			users: state.userPage.users,
		}
	}, {
		loadUsers,
	}
)(UserPageContainer);

export default UserPage;