import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    
    // states
    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this); -> solved with arrow in the function handleChange

  }

  componentDidMount() {
    // fetch the users from other api
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // set the response from api to our state monsters
      .then(users => this.setState({ monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }


  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* search bar */}
        <SearchBox placeholder='Search Monsters' handleChange={this.handleChange} />
        {/* card lists with monsters */}
        <CardList monsters={ filteredMonsters }/> 
      </div>
      
    );
  }
}
export default App;
