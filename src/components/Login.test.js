const React = require('react');
const ReactDom = require('react-dom');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { configure, shallow, render } = require('enzyme');
import Login from './Login';

Enzyme.configure({
    adapter: new Adapter(),
});

it('Login component renders', () => {
    const div = document.createElement('div');
    ReactDom.render('<LoginUserSection />', div);
    ReactDom.unmountComponentAtNode(div);
});

describe("<Login />", () => {
    it('Should render login <Login /> component', () => {
        const userInputSection = shallow(<Login />);
    });
});
