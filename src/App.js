import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      greetings: 'Hello Ivan'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          {/* this is the value defined from state */}
          <p>{this.state.greetings}</p>
          <button className="btn btn-hover" onClick={() => this.setState({greetings: 'Hello Sever'})}>Change Text</button>
        </header>
      </div>
    );
  }
}
export default App;
