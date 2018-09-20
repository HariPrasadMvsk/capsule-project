import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class messageForm extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		};
	}
	
	InputChangeHandler(e) {
		this.setState({ text: e.target.value });

		if(this.props.onChange) {
			this.props.onChange();
		}
	}
	
	FormSubmitHandler(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.text);
		this.setState({ text: '' });
	}

	render() {
		return (
			<form onSubmit={this.FormSubmitHandler.bind(this)}>
				<TextField style={{width: '100%', marginTop: '20px'}} id='msg' label='Please enter new message here...' value={this.state.text} onChange={this.InputChangeHandler.bind(this)} />
			</form>
		);
	}
}

export default messageForm;
