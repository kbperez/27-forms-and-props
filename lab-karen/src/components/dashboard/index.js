
import React from 'react';
import uuidv1 from 'uuid/v1';
import NoteCreateForm from '../note-create-form/index';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };

    //Binding
    this.addNote = this.addNote.bind(this);
    // this.removeNote = this.removeNote.bind(this);
  }

  //functions
  addNote(note) {
    note.id = uuidv1();
    note.editing = false;
    note.completed = false;
    note.content = '';
    note.content = '';

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  // removeNote(note) {


  // }

  render(){
    return(
      <div className='app'>
        <h1>Dashboard</h1>
        <NoteCreateForm addNote={this.addNote}/>
      </div>

    );
  }
}

export default Dashboard;
