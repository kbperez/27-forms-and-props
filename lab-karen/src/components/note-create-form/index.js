import React from 'react';

class NoteCreateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contents: '',
      title: '',
    };
    //Binding
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //functions
  handleChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]:value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNote(this.state);
    //clear form for next note
    this.setState({
      contents: '',
      title: '',
    });
  }

  render(){
    return (
      <form className='add-note' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='enter title'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <input
          type='text'
          name='contents'
          placeholder='enter contents'
          value={this.state.contents}
          onChange={this.handleChange}
        />

        <button type='submit'> Create Note </button>
      </form>
    );
  }
}

export default NoteCreateForm;
