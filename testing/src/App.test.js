import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme';

describe('Counter Testing', () => {
	let wrapper;

	beforeEach(() => {
		// wrapper = shallow(<App />);
		wrapper = mount(<App />);
	})




	// matches
	test('finding asdf element2', () => {
		expect(wrapper.find("#asdf").type()).toEqual('input');
	});

	// matches
	test('finding asdf element3', () => {
		expect(wrapper.containsMatchingElement(<input id='asdf' type='text' />)).toBeTruthy();
	});








	// test('render the title of counter', () => {
	//   expect(wrapper.find("h1").text()).toContain("This is counter app");
	// });


	// test("render a button with text of `increment`", () => {
	//   expect(wrapper.find('#increment-btn').text()).toBe("Increment");
	// });


	// test('render the initial value of state in a div', () => {
	//   expect(wrapper.find('#counter-value').text()).toBe('0');
	// })


	// test('render the click event of increment button and increment counter value', () => {
	//   wrapper.find('#increment-btn').simulate('click');
	//   expect(wrapper.find('#counter-value').text()).toBe('1');
	// })


	// test('render the click event of decrement button and decrement counter value', () => {
	//   wrapper.find('#increment-btn').simulate('click');
	//   wrapper.find('#decrement-btn').simulate('click');
	//   expect(wrapper.find('#counter-value').text()).toBe('0');
	// })


	// test('render the click event of decrement button and value shoule not be negative', () => {
	//   expect(wrapper.find('#counter-value').text()).toBe('0');
	//   wrapper.find('#decrement-btn').simulate('click');
	//   expect(wrapper.find('#counter-value').text()).toBe('0');
	// })


});


