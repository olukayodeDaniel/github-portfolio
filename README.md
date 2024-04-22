GitHub Repository Portfolio App

This GitHub Repository Portfolio App is a web application built using React.js and Chakra UI. It allows users to view their GitHub repositories, navigate through the repository list with pagination, search for repositories, and filter them based on criteria like name, description, and language.

Navigation
The application consists of two main pages:

Repository List: Displays a paginated list of GitHub repositories. Users can search for repositories and filter them based on name, description, or language. Pagination controls allow users to navigate through the repository list.
Repository Detail: Shows detailed information about a selected repository when clicked from the repository list.
How We Created It
Technologies Used
React.js: Frontend JavaScript library for building user interfaces.
Chakra UI: Component library for building accessible and themeable React applications.
Axios: Promise-based HTTP client for making API requests.
Steps Taken
Fetching Repositories: We used the GitHub API to fetch the user's repositories and displayed them on the Repository List page.
Pagination: Implemented pagination to display a limited number of repositories per page and provided controls to navigate between pages.
Search and Filter: Added functionality to search for repositories and filter them based on name, description, or language.
Routing: Used React Router to handle navigation between the Repository List and Repository Detail pages.
Styling: Applied Glassmorphism design to enhance the UI and provide a sleek look and feel.
Error Handling: Implemented an Error Boundary component to catch and display errors in the application.
404 Page: Created a custom 404 page to handle routes that do not exist.
Accessibility: Ensured accessibility techniques were applied to make the application usable for everyone.
How to Run
Clone this repository to your local machine.
Navigate to the project directory in your terminal.
Install dependencies using npm install.
Start the development server using npm start.
Open your browser and navigate to http://localhost:3000 to view the application.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
