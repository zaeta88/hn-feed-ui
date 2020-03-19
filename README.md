This API is to get the hacker news from:
[http://hn.algolia.com/api/v1/search_by_date?query=nodejs](http://hn.algolia.com/api/v1/search_by_date?query=nodejs)
All the news are getted when the api is first accessed from the /stories endpoint, this stories are saved into the mongo local database and then retreived to the user and formated with the information the web app needs, is also used to deleted by making a delete request to the /stories/:storyId endpoint and removes the story by the parametered id

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Dockerize the project

Check on the Dockerfile instructions to build the hn-feed-ui docker image to be used in the hn-feed stack.
