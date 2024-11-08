# Sportradar Coding Academy Challenge

## Description

This is a React application that displays a list of sports events in a calendar view.

## Getting Started

1. Clone the repository
2. Install dependencies
3. Run the server (this will start the json-server)

```
npm run server
```

4. Run the development server

```
npm run dev
```

5. Open the application in the browser

## Technologies

- React
- Tailwind CSS
- Typescript
- React Router
- React Query
- date-fns
- json-server
- React Lucide

## Decissions made during development

- I used a json-server to mock the API. The goal was to simulate a real API.
- I used React Query to fetch the data from the json-server.
- I used React Router to navigate between the pages.
- I used Tailwind CSS for the styling.
- I used the date-fns library to handle the dates and create date helper functions.
- I refactored the calendar logic to use a context to avoid prop drilling and have cleaner components.
- I used helper functions to check if the event has the required data to be displayed in the EventDetailPage.
