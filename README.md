# Sportradar Coding Academy Challenge

## Description

This is a React application that displays a list of sports events in a calendar view. It includes a form to add new events and a detail view for each event.

## Getting Started

1. Clone the repository
2. Install dependencies

### Option 1: Using npm

-Run the server (this will start the json-server)

```
npm run server
```

- Run the development server

```
npm run dev
```

### Option 2: Using Docker

- Run the docker compose file to run the server and the development server

```
docker compose up
```

- The server will be available at port 3000 and the application will be available at port 5173.

3. Open the application in the browser

## Technologies

- React with Typescript
- Tailwind CSS
- TanStack Query (React Query)
- React Router
- Vitest
- React Testing Library
- Docker
- json-server
- date-fns
- Lucide React

## Decissions made during development

- Used a json-server to mock the API. The goal was to simulate a real API.
- A script runs to remove the trailing commas from the json file and create a new db.json file that is used by the json-server.
- Used React Query to fetch the data from the json-server.
- Used React Router to navigate between the pages.
- Used Tailwind CSS for the styling.
- Used the date-fns library to handle dates and create date helper functions.
- Refactored the calendar logic to use a context to avoid prop drilling and have cleaner components.
- Used helper functions to check if the event has the required data to be displayed in the EventDetailPage.
- Added predifined options for the possible types of sport. I decided on the ones I added (football, basketball, hockey, rugby, american-football) to keep it simple based on the current data structure, where the result object contains fields for home and away goals. In the form I've generalized to score to add flexibility for other sports different than football.
- Used vitest and react-testing-library to write tests.

## Testing

- Run tests using Vitest

```
npm run test
```

## Future Improvements

- Add functionality to update and delete events.
