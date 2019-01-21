import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";

class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    fetch("https://dev-util.edyst.com/challenge/pokemons/random")
      .then(res => res.json())
      .then(data => this.setState({ data: data }))
      .catch(err => alert(`Failed to fetch data from server ${err}`));
  }
  render() {
    let { data } = this.state;
    return (
      <div className="App">
        {data && data.map(card => (
          <Card key={card.tag} card={card} />
        ))}
      </div>
    );
  }
}

export default App;
