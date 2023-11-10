import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFeild: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchFeild } = this.state;
    const filteredRobot = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          type="search"
          placeholder="robo name"
          handleChange={(e) => this.setState({ searchFeild: e.target.value })}
        />
        <CardList monsters={filteredRobot} />
      </div>
    );
  }
}

export default App;
