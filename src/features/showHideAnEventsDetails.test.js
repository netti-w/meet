import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';

import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the user hasn’t opened the app', () => {

    });

    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('all event elements are collapsed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;
    given('the list of event elements is loaded', async () => {
      AppWrapper = await mount(<App />);
    })

    when('an event is selected by clicking the “details“ button', () => {
      AppWrapper.update();
      AppWrapper.find('.event .event-showDetails-btn').at(0).simulate('click');

    });

    then('the event element will expand showing event details', () => {
      expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let AppWrapper;
    given('the details of an event element are displayed', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.event .event-showDetails-btn').at(0).simulate('click');
      expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
    })

    when('clicking the “hide“ button', () => {
      AppWrapper.update();
      AppWrapper.find('.event .event-hideDetails-btn').at(0).simulate('click');
    });

    then('the event details are collapsed again', () => {
      expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
    });
  });

});