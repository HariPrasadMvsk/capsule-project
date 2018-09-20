import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

class ListUsers extends Component {
	render() {
		if (this.props.users) {
			return (
				<List>
					{this.props.users.map((user, index) => {
						if (user.id === this.props.currentUser.id) {
							return (
								<ListItem key={user.id}>
									<Avatar alt="Avatar" src="https://material.io/tools/icons/static/icons/twotone-person_pin-24px.svg"  />
									<ListItemText style={this.buttonStyle} primary={user.name} secondary="Logged in."	/>
								</ListItem>
							);
						}
						return (
							<ListItem key={user.id}>
								<Avatar alt="Avatar" src="https://material.io/tools/icons/static/icons/baseline-person-24px.svg"  />
								<ListItemText primary={user.name} />
							</ListItem>
						);
					})}
				</List>
			);
		} else {
			return <Avatar src="https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif" style={{ margin: 'auto'}} />;
		}
	}
}

export default ListUsers;
