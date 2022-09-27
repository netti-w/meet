Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 10 is the default number
Given user hasn’t entered any number of events 
When the user opens the app
Then the default number will be displayed

Scenario: User can change the number of events they want to see
Given the main page is open
When the user enters a number of events
Then the user will see that specific number of events 