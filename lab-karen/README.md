## Lab 28-routing-and-testing

This project creates an app with React components and routing that incorporates front-end testing according to the following structure
```
App
  Landing
  Dashboard
    NoteCreateForm
    NoteList
      NoteItem
```

**App component**
Manages the front-end routes
- '/' route displays the landing components
- '/dashboard' route displays the dashboard components

**Landing component**
Displays a brief description of add

**Dashboard Component**
- contains all of the application state
- contains a notes array
- contain an addNote method for adding a note with
  - id from uuid.v1
  - editing, false by default
  - completed, false by default
  - content, user defined
  - title, user provided
- contains a removeNote method for deleting a note

**NoteCreateForm Component**
OnComplete the NoteForm adds a note to the applicaton state


**NoteList Component**
displays an unordered list of NoteItem components

**NoteItem Component**
displays the note conent and title
displays a delete button and OnClick removes that note from the application state

**Testing**
TestDashboard tests the inital state
Test NoteCreateForm test the intial state

**Installation & Set-Up**
Fork this repository and install on your machine using git clone. Switch to the lab-karen folder.

This project requires Node JS and npm( Node package manager).

The following excerpt from the existing package.json file shows the required package dependencies. Install devDependencies with *npm i -D (package name)*.
```
"devDependencies": {
  "babel-core": "^6.26.0",
  "babel-loader": "^7.1.2",
  "babel-plugin-transform-object-rest-spread": "^6.26.0",
  "babel-preset-env": "^1.6.1",
  "babel-preset-react": "^6.24.1",
  "css-loader": "^0.28.9",
  "enzyme": "^3.3.0",
  "enzyme-adapter-react-16": "^1.1.1",
  "eslint": "^4.18.1",
  "eslint-plugin-react": "^7.7.0",
  "extract-text-webpack-plugin": "^3.0.2",
  "html-webpack-plugin": "^2.30.1",
  "jest": "^22.4.0",
  "node-sass": "^4.7.2",
  "react": "^16.2.0",
  "react-dom": "^16.2.0",
  "react-router-dom": "^4.2.2",
  "resolve-url-loader": "^2.2.1",
  "sass-loader": "^6.0.6",
  "superagent": "^3.8.2",
  "uuid": "^3.2.1",
  "webpack": "^3.11.0",
  "webpack-dev-server": "^2.11.1"
}
```

Additionally, add the following scripts to your package.json file to run from the command line.
```
"scripts": {
  "test": "jest",
  "watch": "webpack-dev-server --inline --hot"
},
```
**Running the app**
From the command line, type *npm run watch* to start the Webpack server.  Open a tab in the browser at localhost:8080 to see the app running.
