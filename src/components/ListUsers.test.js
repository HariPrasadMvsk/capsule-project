const React = require('react');
const ReactDom = require('react-dom');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { configure, shallow, render } = require('enzyme');
import ListUsers from './ListUsers';

Enzyme.configure({
    adapter: new Adapter(),
});

it('List of users component renders', () => {
    const div = document.createElement('div');
    ReactDom.render('<ListUsers />', div);
    ReactDom.unmountComponentAtNode(div);
});

describe("<ListUsers />", () => {
    it('Should render in user list container <ListUsers /> component', () => {
        const userList = shallow(<ListUsers />);
    });
});
