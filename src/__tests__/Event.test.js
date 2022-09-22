import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];

    EventWrapper = shallow(<Event event={event} />);
  });

  test('render title in event item', () => {
    expect(EventWrapper.find('.event-title')).toHaveLength(1);
  });

  test('render info in event item', () => {
    expect(EventWrapper.find('.event-info')).toHaveLength(1);
  });

  test('render details button in event item', () => {
    expect(EventWrapper.find('.event-showDetails-btn')).toHaveLength(1);
  });

  test('render title in event item correctly', () => {
    expect(EventWrapper.find('.event-title').text()).toBe(event.summary);
  });


  test('render info in event item correctly', () => {
    expect(EventWrapper.find('.event-info').text()).toContain(
      event.start.dateTime);
    expect(EventWrapper.find('.event-info').text()).toContain(
      event.start.timeZone);
    expect(EventWrapper.find('.event-info').text()).toContain(
      event.location);
  });

  test('render event item to be collapsed by default', () => {
    expect(EventWrapper.state('show')).toBe(false);
  });

  test('clicking details button should show event details (change state to be true)', () => {
    EventWrapper.setState({
      show: false
    });
    EventWrapper.find('.event-showDetails-btn').simulate('click');
    expect(EventWrapper.state('show')).toBe(true);
  });

  test('render event details when event item is expanded', () => {
    EventWrapper.setState({
      show: true
    });
    expect(EventWrapper.find('.event-details')).toHaveLength(1);
  });

  test('render event details correctly when event item is expanded', () => {
    EventWrapper.setState({
      show: true
    });
    expect(EventWrapper.find('.event-details').text()).toContain(
      event.description);
    expect(EventWrapper.find('.event-hideDetails-btn')).toHaveLength(1);
  });

  test('render click to collapse event details', () => {
    EventWrapper.setState({
      show: true
    });
    EventWrapper.find('.event-hideDetails-btn').simulate('click');
    expect(EventWrapper.state('show')).toBe(false);
  });

  test('render event item after clicking hide when item is collapsed again', () => {
    EventWrapper.setState({
      show: false
    });
    expect(EventWrapper.find('.event-details')).toHaveLength(0);
  });

  test('render details button after clicking hide when item is collapsed again', () => {
    EventWrapper.setState({
      show: false
    });
    expect(EventWrapper.find('.event-hideDetails-btn')).toHaveLength(0);
  });

});