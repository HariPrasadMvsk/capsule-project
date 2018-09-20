import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles =  {
	header: {
		padding: '20px',
		textAlign: 'center',
		backgroundColor: '#f5f5f5',
		borderRadius: '4px',
		boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
		marginBottom: '15px'
	},
	gridWrapper: {
		margin: '50px'
	},
	textField: {
		marginLeft: '10px',
		marginRight: '10px',
		width: '300px',
		fontSize: '10px'
	},
	button: {
		margin: '30px 0px 30px 40px', 
		height: '20px'
	},
	footer: {
		padding: '25px',
		margin: '15px auto',
		textAlign: 'center',
		fontFamily: 'verdana',
		fontSize: '12px',
		backgroundColor: '#f5f5f5',
		borderRadius: '4px',
		boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
	}
};

class InputSection extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: ''
		};
	}

	submitHandler(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.username);
	}

	changeHandler(e) {
		this.setState({ username: e.target.value });
	}

	render() {
		return (
			<React.Fragment>
				<Grid container  justify='center' alignItems='center'>
					<Grid item xs={12} sm={4}>
						<div style={styles.header}>
							<Typography variant="title" color="default">
								Login
							</Typography>
						</div> 
						<Paper style={this.userForm}>
							<Grid container justify='center' alignItems='center' >
			   
								<Typography variant='title' color='inherit'>
									<form>
										<Grid item xs={12} sm container>
											<TextField id='name' label='Please enter user name' onChange={this.changeHandler.bind(this)} margin='normal' />
											<Button onClick={this.submitHandler.bind(this)} variant='outlined'  color='default' style={styles.button}>
												Submit
											</Button>
										</Grid>
									</form>
								</Typography>
					  
							</Grid>
						</Paper>
						<div style={styles.footer}>
							All &copy; rights are reserved.
						</div>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}

export default InputSection;
