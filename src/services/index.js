import axios from 'axios';
import Chatkit from '@pusher/chatkit';

export function getUserName(username) {
	return axios
		.post('/users', { username })
		.then(
			result =>
				new Promise((resolve, reject) => {
					resolve(username);
				})
		)
		.catch(error => {
			return username;
		});
}
// To run this in local add this url before the users 'http://localhost:3001/users',
export function getCurrentUserNameService(username) {
    return new Chatkit.ChatManager({
		instanceLocator: 'v1:us1:51ac1435-d28e-46aa-b3cd-fb19e28436e4',
		userId: username,
		tokenProvider: new Chatkit.TokenProvider({
			url: '/authenticate'
			// To run this in local use this - url: 'http://localhost:3001/authenticate'
		})
    })
    .connect()
    .then(
		currentUser =>
		new Promise(resolve => {
			if (currentUser.users.length > 0) {
				resolve(currentUser);
			} else {
				currentUser
					.joinRoom({ roomId: 16460836 })
					.then(room => {
						currentUser.messages = [
						  {
							text: room.name,
							senderId: ""
						  }
						];
						resolve(currentUser);
					})
					.catch(err => {
						console.log(`Error - ${err}`);
					});
			}
        })
    )
    .catch(error => console.error('error', error));
}

export function getMessagesService(arg) {
	return arg.currentUser
    .fetchMessages({
		roomId: arg.roomId,
		direction: 'older',
		limit: 100
    })
    .then(
		messages =>
        new Promise(resolve => {
          resolve(messages)
        })
    );
}

export function getCreateRoomService(action) {
    return action.currentUser.currentuser.createRoom({
        name: action.roomName,
        private: false
    })
    .then(room => new Promise((resolve, reject) => {
        resolve(room)
        window.location.reload();
    })
    .catch(err => {
        console.log(`Error - ${err}`)
    }));
}
