# Statstation
This is the project made during my microsoft engage 2022 period on the topic Data Analytics!

Statstation is a full-stack web application on which multiple people can study the stats of various data.
Implemented the ADAPT Feature(ADAPT) to store data from charts.
Created multiple dashboard Page (X-Factor) where people can have virtual do analysis/view stats together and share with people of common interests.



## Tech Stack

- The application was developed in the **Python** runtime environment with **reactJS** as the primary library for the user interface, using the **echarts**,**numpy**,**AntD** & **Matplotlib** libararies as the main libraries for the backend development.
- User authentication:  **Firebase**
- Database for user and channel data: **MongoDB**

## Agile
The development was led forward with an agile mindset, following an iterative development & indulging in sprints for groups of features instead of one single feature due to time being limited. This allowed the development to be more organized thorughout and was able to easily infuse in, the feature that the 'adopt' stage asked for.

## Overview

The peer to peer dashboard is handled using the chartjs library for javascript and the connection to any room is managed by routing libraries. Each peer that is on the current dashboard network had a collection of data it is connected to. The dashboard allows the peers on this network to communicate among themselves by updating graphs with data. The cloud chartjs servers are used to initialize every peer on the network. By default, peerJS is configured to connect to Google's **STUN** server, but for **TURN** servers, we have to manually configure the details while the peer data is created.

eChartjs is used to extract the charts and the graph handles using ``navigator.mediaDevices.getUserMedia()`` . For displaying analytical data like graphs,charts etc. AntD's ``navigator.mediaDevices.getDisplayMedia()`` allows users to capture their screen contents in a similar way. It allows us to access all the tracks of any data-input(static or dynamic) which in turn allows us to update or disable them accordingly and properly end user better interfacing. A datafeed is sent over all the peer to peer connections present in the database server.  
Hence, visualisation, updation & creating analytical data is altogether implemented using eChart.js,AntD designs and Reactjs.

The backend server is an express app with APIs to create users & channels, add user to channels, fetching user channels and generate user unique room-ids for channels. React was used to develop a simple, well-structured & responsive UI, while keeping an agile mindset.  

User-related details and channel detail are stored using MongoDB. A document based model was chosen as it allows json based query values and response values which makes querying for complex objects easier, hence aiding to rendering at the frontend.  
User authentication is added to the application using firebase along with React's Context to pass down user details to every child UI component.

## Theme Demo
![Gentelella Bootstrap Admin Template](https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/gentelella-admin-template-preview.jpg 
"Gentelella Theme Browser Preview")
## Screenshots
![screenshot-colorlib com-2022 05 28-15_44_14](https://user-images.githubusercontent.com/77486870/170821004-84b5d757-03f4-4823-8d62-3a88935dbb4a.png)
![screenshot-colorlib com-2022 05 28-15_43_50](https://user-images.githubusercontent.com/77486870/170821006-297ed0a7-8c03-4158-adff-6ac6801ba878.png)
![screenshot-colorlib com-2022 05 28-15_43_18](https://user-images.githubusercontent.com/77486870/170821008-1b313b39-837e-432c-8cec-2d8a4486690d.png)
![screenshot-colorlib com-2022 05 28-15_43_02](https://user-images.githubusercontent.com/77486870/170821009-a8eda769-4cb0-4b1d-927a-9a72f735c561.png)
![screenshot-colorlib com-2022 05 28-15_42_14](https://user-images.githubusercontent.com/77486870/170821014-dd2e4295-cfbd-4dc3-b773-a15776f9e235.png)

**[Project Demo](https://colorlib.com/polygon/gentelella/index.html)**  
**[Video Link](https://drive.google.com/file/d/1lUAVhAUr01o8-BoUeq2sph8le1GdpafO/view?usp=sharing)**  
## How to contribute
To contribute, please ensure that you have stable [Node.js](https://nodejs.org/) and [npm](https://npmjs.com) installed.

Test if Gulp CLI is installed by running `gulp --version`.  If the command isn't found, run `npm install -g gulp`.  For more information about installing Gulp, see the Gulp's [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md).

To have all gulp dependencies run ```npm install```

If `gulp` is installed, follow the steps below.

1. Fork and clone the repo.
2. Run `gulp`, this will open gentelella on your default browser
3. Now you can code, code and code!
4. Submit a pull request

# Installation via package manager

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

###### `npm run build`

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

## License information
Project is licensed under The MIT License (MIT). Which means that you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

Project is developed and maintained by [whiteHatpro](https://github.com/whiteHatpro)
