import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    // fetch the users from other api
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // set the response from api to our state monsters
      .then(users => this.setState({ monsters: users}))
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}
export default App;
