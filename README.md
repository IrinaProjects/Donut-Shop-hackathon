# A React Task

## Objective

Import the project from https://gitlab.com/boomdotdev/boilerplates/react
Checkout the dev branch
Your task is to build a single page mobile application for a newly opened donut shop

## Requirements

The project must run when started via npm run start
When implemented merge the dev branch into master before validating
The implementation must match the design as close as possible. You can use this extension to help you out
You must create the following components:
APP which will run the whole project.
Donut Component which must represent every donut in the app.
Title Component which must visualize every title in the app.
Start Screen
Menu Screen
Payment Screen
Preparation Screen
Ready Screen

##Design

You can find the design here
You must use a specific font, that you can find here font

##Features

When the user clicks on the “Start” button on the StartScreen, the app must switch to MenuScreen.
It will be considered as a plus if the Donuts in the MenuScreen rotate. You can check this documentation on animating your components.
When the user selects a donut from the menu, the app must switch to PaymentScreen.
When the user clicks on one of the Pay buttons, the app must switch to PreparationScreen.
On the preparation screen the selected donut from the menu, should be rotating.
The donut must be in preparation for 5 sec, after that the app should switch to ReadyScreen.
When the user clicks on the “Done” button in the ReadyScreen, the app must switch to StartScreen.

##Available Scripts

In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Gotchas
Change "start": "cross-env PORT=8080 BROWSER=none react-scripts start" with "start": "cross-env PORT=8080 BROWSER=none react-scripts --openssl-legacy-provider start" in package.json

