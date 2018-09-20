import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const styles = {
	logoutBtn: {
		marginTop: '13px',
		border: '1px solid #999',
		textAlign: 'right',
		float: 'right',
		marginRight: '10%'
	}
};

class Logout extends Component {
    constructor(props) {
		super(props);
		this.logOutHandler = this.logOutHandler.bind(this);
    }

    logOutHandler(event) {
        event.preventDefault();

        localStorage.removeItem('username');
        localStorage.removeItem('screen');
        window.location.reload();
    }

    render() {
        return (
        	<Button style={styles.logoutBtn} onClick={ this.logOutHandler }>
				Logout
			</Button>
        );
    }
}

export default Logout;
