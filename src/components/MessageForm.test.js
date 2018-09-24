const React = require('react');
const ReactDom = require('react-dom');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { configure, shallow, render } = require('enzyme');
import MessageForm from './MessageForm';

Enzyme.configure({
    adapter: new Adapter(),
});

it('Message form component renders', () => {
    const div = document.createElement('div');
    ReactDom.render('<MessageForm />', div);
    ReactDom.unmountComponentAtNode(div);
});

describe("<MessageForm />", () => {
    it('Should render message input container <MessageForm /> component', () => {
        const messageInputSection = shallow(<MessageForm />);
    });
});
