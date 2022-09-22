import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

describe('<NumberOfEvents /> component', () => {
  test('render number input', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.number-input')).toHaveLength(1);
  })

  test('render default input number is 32', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.number-input').prop('value')).toBe(32)
  })

  test('change state when number input changes', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    NumberOfEventsWrapper.setState({
      numOfEvents: 32
    });
    const eventObject = { target: { value: 20 } };
    NumberOfEventsWrapper.find('.number-input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numOfEvents')).toBe(20);
  });
})