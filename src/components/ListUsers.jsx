import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

class ListUsers extends Component {
	render() {
		if (this.props.users) {
			return (
				<List style={{marginLeft: '25px'}}>
					{this.props.users.map((user, index) => {
						if (user.id === this.props.currentUser.id) {
							return (
								<WhosOnlineListItem key={user.id} presenceState="online">
									
										<ListItemText style={{marginLeft: '0px'}} primary={user.name} secondary="(You)"	/>
									
								</WhosOnlineListItem>
							)
						}
						return (
							<WhosOnlineListItem key={index} presenceState={user.presence.state}>
								
									<ListItemText  style={{marginLeft: '0px'}} primary={user.name} />
								
							</WhosOnlineListItem>
						)
					})}
				</List>
			);
		} else {
			return <Avatar src="https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif" style={{ margin: 'auto'}} />;
		}
	}

	
}

class WhosOnlineListItem extends Component {
	render() {
		const styles = {
			li: {
				display: 'flex',
				alignItems: 'center',
				marginTop: 5,
				marginBottom: 5,
				paddingTop: 2,
				paddingBottom: 2,
				paddingLeft: 0
			},
			div: {
				borderRadius: '50%',
				width: 11,
				height: 11,
				marginRight: 10
			},
		}
		return (
			<ListItem  style={styles.li}>
			<div
			  style={{
				...styles.div,
				backgroundColor:
				  this.props.presenceState === 'online' ? '#00FF00' : '#a9a9a9',
			  }}
			/>
			{this.props.children}
			</ListItem>
		  
		)
	}
}

export default ListUsers;
