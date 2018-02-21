import React from 'react';
const uuidv1 = require('uuid/v1');

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };

    //Binding
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

//functions
addNote(note) {
  note.id: uuidv1();
  note.editing: false;
  note.completed: false;
  note.content: '';
  note.content: '';

  this.setState(previousState => {
    return {notes: [...previousState.notes, note]}
  });
}

  removeNote(note) {
    note.id: uuidv1();
    note.editing: false;
    note.completed: false;
    note.content: '';
    note.content: '';

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]}
    });
  }

  render(){
    return(
      <div>
        <h1>Dashboard</h1>
        <NoteCreateForm addNote={this.addNote}/>
        <NoteList removeNote={this.removeNote}/>
      </div>

    );
  }
}

export default Dashboard;
