import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 10 is the default number', ({ given, when, then }) => {
    given('user hasn’t entered any number of events', () => {

    });

    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the default number will be displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.state('numberOfEvents')).toEqual(10);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('the main page is open', () => {
      AppWrapper = mount(<App />);
    });

    when('the user enters a number of events (e.g., “6”)', () => {
      AppWrapper.update();
      let NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      const eventObject = { target: { value: 6 } };
      NumberOfEventsWrapper.find('.number-input').simulate('change', eventObject);
    });

    then('the user will see that specific number of events', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(6);
    });
  });

});