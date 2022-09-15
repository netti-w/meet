# meet

## Description
This is an progressive web application (PWA) that is built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

The app provides a list of upcoming events for any given city, with data provided by Google Calendar. The app works offline using cached data from the last time it was used online. The user can search for events in a specific city or browse all events, customize how many events are shown on screen, click an event for more details, and see how many events are upcoming in certain cities.

## Dependencies:
- HTML5
- CSS
- Javascript
- React
- React DOM
- React Scripts
- Axios
- Google Calendar API (incl OAuth2 authentication)

#### Key Features & User Stories
##### FEATURE: SHOW/HIDE AN EVENT'S DETAILS
User story: As a user, I should be able to view and hide an event's details, so that I get more information about the event.

###### Scenario 1: An event element is collapsed by default
Given the list of event elements is loaded
When no event is selected
Then the event elements are collapsed

###### Scenario 2: User can expand an event to see its details
Given the list of event elements is loaded
When an event is selected by clicking the "details" button
Then the event element will expand showing event details

###### Scenario 3: User can collapse an event to hide its details
Given the details of an event element are displayed
When clicking the "hide" button
Then the event details are collapsed again.

##### FEATURE: SPECIFY NUMBER OF EVENTS
As a user, I should be able to specify the number of events, so that I can restrict or expand my number of event options. 

###### Scenario 1: When user hasn’t specified a number, 32 is the default number
Given that the user sees a list of upcoming events 
When the user hasn’t spefified the number of events
Then the default number of events displayed will be 32.

###### Scenario 2: User can change the number of events they want to see
Given the user has selected a city (or no city)
When the user enters a number of events
Then the user will see that specific number of events. 

##### FEATURE: USE THE APP WHEN OFFLINE
As a user, I should be able to open the app in offline modus, so that I can still see all events and their details from the last time I was online.

###### Scenario 1: Show cached data when there’s no internet connection
Given the app has no internet connection 
When the user opens the app
Then the cached data will be shown

###### Scenario 2: Show error when user changes the settings (city, time range)
Given the user is in the settings tab 
When the user submits any changes any settings data
Then an error will show

##### FEATURE: DATA VISUALIZATION
As a user, I should be able to see the upcoming events in a chart, so that I have an overview of the amount of events per city.

###### Scenario 1: Show a chart with the number of upcoming events in each city
Given the user has selected a city 
When the user clicks on the button "Upcoming events" of the city
Then a chart will list the upcoming events taking place in that city