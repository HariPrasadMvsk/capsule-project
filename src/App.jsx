import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';

class App extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		screen: PropTypes.string
	};

	constructor(props) {
		super(props);

		this.state = ({
			screen: localStorage.getItem('screen') || '',
			username: localStorage.getItem('username') || '',
		});

		this.getUser = this.getUser.bind(this);
	};

	getUser(username) {
		this.props.dispatch({
			type: 'GET_USER_NAME',
			username
		});
	}

	render() {
		const username = this.props.username || this.state.username;
		const screen = this.props.screen || this.state.screen;

		if (screen && username) {
			localStorage.setItem('screen', screen);
			localStorage.setItem('username', username);
		}

		if (screen === '') {
			return <Login onSubmit={this.getUser} />;
		}
		
		if (screen === 'ChattingSection') {
			return <ChatRoom username={username} />;
		}
	}
}

const mapStateToProps = (state) => ({
	screen: state.screen,
	username: state.username
});

export default connect(mapStateToProps) (App);
