import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    // states
    this.state = {
      monsters: [],
      searchField: ''
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

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        {/* search bar */}
        <input 
          type='search' 
          placeholder='Search Monsters' 
          onChange={e => this.setState({ searchField: e.target.value })}
          />
        {/* card lists with monsters */}
        <CardList monsters={ filteredMonsters }/> 
      </div>
    );
  }
}
export default App;
