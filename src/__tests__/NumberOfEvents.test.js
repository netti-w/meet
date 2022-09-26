import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.number-input')).toHaveLength(1);
  })

  test('render default input number is 10', () => {
    expect(NumberOfEventsWrapper.find('.number-input').prop('value')).toBe(10)
  })

  test('change state when number input changes', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 10
    });
    const eventObject = { target: { value: 6 } };
    NumberOfEventsWrapper.find('.number-input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(6);
  });
})