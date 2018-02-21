import './styles/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

const API_URL = 'https://www.reddit.com/r';

class SearchForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      num: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState({name: e.target.value});
    this.setState({num: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.update_state(this.state.name);
    this.props.update_state(this.state.num);
  }

  render() {
    return (
      <form
        className="search-form"
        onSubmit={this.handleSubmit}>

        <input
          type="text"
          name="reddit-topic"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter topic" />

        <input
          type="number"
          name="reddit-display"
          value={this.state.num}
          onChange={this.handleChange}
          placeholder="Enter number of items to display" />

        <button type="submit">Search</button>

      </form>
    );
  }
}

class SearchResultsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="results">
        {this.props.reddit ?
          <section className="reddit-data">
            console.log(this.props.reddit)
            <h2>{this.props.reddit}</h2>
          </section>
          :
          undefined
        }

        {this.props.err ?
          <section className="reddit-error">
            <h2>You made an error</h2>
          </section>
          :
          undefined
        }
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reddit: null,
      searchError: null,
    };
    this.searchApi = this.searchApi.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  searchApi(name) {
    return superagent.get(`${API_URL}/${searchFormBoard}.json?limit=${searchFormLimit}`);
  }

  updateState (name) {
    this.searchApi(name)
      .then(res => this.setState({reddit: res.body, searchError: null}))
      .catch(err => this.setState({reddit: null, searchError: err}));
  }

  render() {
    return (
      <div className="application">
        <SearchForm update_state={this.updateState}/>
        <SearchResultsList reddit={this.state.reddit} error={this.state.searchError}/>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
