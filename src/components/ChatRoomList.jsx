import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = {
	roomListWrapper: {
		height: "auto",
		overflowY: "auto"
	},
	roomListStyle: {
		clear: 'both',
		fontFamily: 'verdana',
		fontSize: '12px',
		marginTop: '15px',
		color: '#999'
	},
	roomListItemStyle: {
		fontFamily: 'verdana',
		fontSize: '16px'
	},
	navStyle: {
		padding: '0'
	},
	ListItemStyle: {
		paddingLeft: '0'
	}
};

class RoomList extends Component {
    render() {
        return (
            <div style={{paddingTop:'10px'}}>
                <h1 style={styles.roomListStyle}><span style={{backgroundColor:'#000', padding: '10px', color: '#fff'}}>Rooms List</span><div style={{borderTop:'1px solid #000', position: 'relative', top:'9px'}}></div></h1>
                <div style={styles.roomListWrapper}>
                    {this.props.rooms.map((rooms, index) => (
                      <List key={index} component="nav" style={styles.navStyle}>
                          <ListItem style={styles.ListItemStyle}>
                              <ListItemText primary={rooms.name} />
                          </ListItem>
                      <Divider />
                      </List>
                    ))}
                </div>
            </div>
        )
    }
}

export default RoomList;
