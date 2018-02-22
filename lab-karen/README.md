## Lab 28-routing-and-testing


This project creates an app with three React components according to the following structure
```
App
  Landing
  Dashboard
    NoteCreateForm
    NoteList
      NoteItem
```

**App Component**
The App component should manage the frontend routes and have a navbar
the / route should display the Landing component
the /dashboard route should display the Dashboard component

**Landing Component**
The Landing component should display a brief description of the notes app

**Dashboard Component**
The Dashboard component should manage the entire application state.
The state should contain a notes array
It should have a bound addNote(note) method that adds a note to state.notes
each note that gets added should have the following data
- id: always should contain the result of uuid.v1()
- editing: false by default
- completed: false by default
- content: user provided content
- title: user provided title
It should have a bound removeNote(note) method that removes a note from state.notes based on its id

**NoteCreateForm Component**
onComplete the NoteForm should add a note to the application state

**NoteList Component**
should display an unordered list of NoteItem components

**NoteItem Component**
should display the notes content and title
should display a delete button
onClick the note should be removed from the application state

**Test**
Test Dashboard tests the initial state
Test NoteCreateForm tests the initial state

**Installation & Set-Up**
Fork this repository and install on your machine using git clone. Switch to the lab-karen folder.

This project requires Node JS and npm( Node package manager).

The following excerpt from the existing package.json file shows the required package dependencies. Install devDependencies with *npm i -D (package name)*.
```
"devDependencies": {
  "babel-core": "^6.26.0",
  "babel-loader": "^7.1.2",
  "babel-preset-env": "^1.6.1",
  "babel-preset-react": "^6.24.1",
  "cowsay-browser": "^1.1.8",
  "css-loader": "^0.28.9",
  "eslint": "^4.18.1",
  "eslint-plugin-react": "^7.7.0",
  "extract-text-webpack-plugin": "^3.0.2",
  "html-webpack-plugin": "^2.30.1",
  "node-sass": "^4.7.2",
  "react": "^16.2.0",
  "react-dom": "^16.2.0",
  "sass-loader": "^6.0.6",
  "superagent": "^3.8.2",
  "webpack": "^3.11.0",
  "webpack-dev-server": "^2.11.1"
},
```
Additionally, add the following scripts to your package.json file to run from the command line.
```
"scripts": {
  "build": "webpack",
  "watch": "webpack-dev-server --inline --hot"
},
```
**Running the app**
From the command line, type *npm run watch* to start the Webpack server.  Open a tab in the browser at localhost:8080 to see the app running.
