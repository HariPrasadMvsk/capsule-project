import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import ChatMessage from "./ChatMessage";
import ListUsers from "./ListUsers";
import MessageForm from "./MessageForm";
import CreateRoom from "./CreateChatRoom";
import RoomList from "./ChatRoomList";
import Logout from "./Logout";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const styles = {
	header: {
		display: 'flex',
		backgroundColor: '#f5f5f5',
		borderRadius: '4px',
		boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
	},
	roomsSection: {
		marginTop: '20px',
		backgroundColor: '#f5f5f5',
		borderRadius: '4px',
		boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
		height: 'auto',
		padding: '20px'
	},
	userListContiner: {
		marginTop: '20px',
		width: 'auto',
		backgroundColor: '#f5f5f5',
		borderRadius: '4px',
		boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
	},
	roomListStyle: {
		fontFamily: 'verdana',
		fontSize: '12px',
		padding: '20px 25px 0'
	},
	footer: {
		width: '100%',
		padding: '25px',
		margin: '25px 10px',
		textAlign: 'center',
		fontFamily: 'verdana',
		fontSize: '12px',
		backgroundColor: '#f5f5f5',
		borderRadius: '4px',
		boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
	}
};

class ChatRoom extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		currentuser: PropTypes.object,
		currentRoom: PropTypes.object,
		messages: PropTypes.array,
		rooms: PropTypes.array,
	};

	constructor(props) {
		super();

		this.state = {
			currentUser: {},
			messages: [],
			rooms: [],
			mesgUpdate: true,
			newRoom: true,
			roomId: 16460836
		};

		this.sendMessage = this.sendMessage.bind(this);
	}

	componentDidMount() {
		this.props.dispatch({
			type: "GET_CURRENT_USER_NAME",
			currentUserName: this.props.username
		});
	}

	sendMessage(text) {
		this.props.currentuser.sendMessage({
			text,
			roomId: this.props.roomId ? this.props.roomId : 16460836
		});

		this.props.dispatch({
			type: "GET_MESSAGES",
			roomId: this.props.roomId ? this.props.roomId : 16460836,
			currentUser: this.props.currentuser
		});

		this.setState({
			mesgUpdate: true
		});
	}

	render() {
		const currentuser = this.props.currentuser || {};
		const users = currentuser ? currentuser.users : [];
		const messages = this.props.messages || [];
		const rooms = this.props.rooms || [];
    
		if (users && users.length && this.state.mesgUpdate) {
			this.props.dispatch({
				type: "GET_MESSAGES",
				roomId: 16460836,
				currentUser: this.props.currentuser
			});

			this.setState({
				mesgUpdate: false
			});
		}

		return (
			<React.Fragment>
				<div style={styles.header}>
					<Grid container>
						<Grid item xs={12} sm={10}>
							<Typography variant="title" color="default" style={{padding: '20px'}}>
								<Avatar src="https://material.io/tools/icons/static/icons/baseline-chat-24px.svg" style={{display: 'inline', float: 'left', marginTop:'-7px'}} /> <span >Chat Room</span>
							</Typography>
						</Grid>
						<Grid item xs={12} sm={2}>
							<Logout />
						</Grid>
					</Grid>
				</div>
				<Grid container spacing={16}>
					<Grid item xs={12} sm={3}>
						<div style={styles.userListContiner}>
							<h1 style={styles.roomListStyle}><span style={{backgroundColor:'#000', padding: '10px', color: '#fff'}}>Users List</span><div style={{borderTop:'1px solid #000', position: 'relative', top:'9px'}}></div></h1>
							<ListUsers currentUser={currentuser} users={users} />
						</div>
						<section style={styles.roomsSection}>
							<CreateRoom currentUser={this.props} />
							<div style={{clear: 'both', marginTop: '15px'}}>
								<RoomList rooms={rooms} />
							</div>
						</section>
					</Grid>
					<Grid item xs={12} sm={9}>
						<section style={{marginTop: '10px'}}>
							<ChatMessage messages={messages} />
						</section>
						<MessageForm onSubmit={this.sendMessage} />
					</Grid>
				</Grid>
				<Grid container spacing={16}>
					<div style={styles.footer}>
						All &copy; rights are reserved.
					</div>
				</Grid>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	currentuser: state.currentUserName,
	messages: state.messages,
	rooms: state.rooms
});

export default connect(mapStateToProps)(ChatRoom);
