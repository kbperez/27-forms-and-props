import React from 'react';
import Dashboard from '../dashboard/index';


class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      title: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //functions

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    //clear form for next note
    this.setState({
      content: '',
      title: '',
    });
  }


  render() {
    return (
      <li className='note-item'>
        <h3>{this.props.note.title}</h3>
        <h3>{this.props.note.content}</h3>

        <button className='delete'
          type="submit"
          value={this.props.note.id}
          onClick={this.props.removeNote}>
          Delete</button>

      </li>
    );
  }
}


export default NoteItem;
