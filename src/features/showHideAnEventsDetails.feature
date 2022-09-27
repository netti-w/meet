Feature: Show/Hide Details of an Event

Scenario: An event element is collapsed by default
Given the user hasn’t opened the app
When the user opens the app
Then all event elements are collapsed

Scenario: User can expand an event to see its details
Given the list of event elements is loaded
When an event is selected by clicking the “details“ button
Then the event element will expand showing event details

Scenario: User can collapse an event to hide its details
Given the details of an event element are displayed
When clicking the “hide“ button
Then the event details are collapsed again