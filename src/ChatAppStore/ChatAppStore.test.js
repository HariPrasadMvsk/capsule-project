const { createStore } = require('redux');
const capsuleProject = require('.');
const should = require('chai').should();

describe('Capsule Project testing', () => {
	it('should get user name', () => {
		const currState = { username: '' };
		const store = createStore(capsuleProject, currState);
		const action = {
			type: 'GET_USER_NAME',
			username : 'Hari'
		};
		store.dispatch(action);
		store.getState().should.have.property('username');
		store.getState().should.have.property('username').and.equal('Hari');
	});
	it('should set user name', () => {
		const currState = { username: '' };
		const store = createStore(capsuleProject, currState);
		const action = {
			type: 'SET_USER_NAME',
			username : 'Hari'
		};
		store.dispatch(action);
		store.getState().should.have.property('username');
		store.getState().should.have.property('username').and.equal('Hari');
	});
});
