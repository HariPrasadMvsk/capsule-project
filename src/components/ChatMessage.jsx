import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

const styles = {
	paperStyle: {
		padding: '10px',
		fontFamily: 'verdana'
	},
	ul: {
		margin: 0,
		padding: 0
	},
	listStyle: {
		listStyle: 'none',
		padding: '10px 0 0'
	},
	message: {
		fontFamily: 'cursive',
		color: '#999',
		fontSize: '15px'
	},
	senderId: {
		fontWeight: 'Bold'
	}
};

class ChatMessage extends Component {
	render() {
		return (
			<div>
				<ul style={styles.ul}>
					{this.props.messages.map((message, index) => (
						<li key={index} style={styles.listStyle}>
							<Paper style={styles.paperStyle}>
								<span style={styles.senderId}>{message.senderId}</span>
								<p style={styles.message}>{message.text}</p>
							</Paper>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default ChatMessage;
