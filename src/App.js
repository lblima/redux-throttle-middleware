import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { fetchMessage } from './actions';

let counter = 0;

class App extends Component {

  componentDidMount() {
    this.props.fetchMessage();
  }

  renderMessage(m) {
    return <div key={counter++}>{ m }</div>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Middleware Throttle Sample</h1>
        </header>
        <p><button onClick={ () => this.props.fetchMessage() }>Fetch Messages</button></p>         
          { this.props.messages.map(this.renderMessage) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
      messages: state.messages
  };
}

export default connect(mapStateToProps, { fetchMessage })(App);
