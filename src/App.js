import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Loader from './components/Loader/Loader';

class App extends Component {
  state = {
    data: [],
    loader: true
  };
  // api request from server
  componentDidMount() {
    fetch("https://dev-util.edyst.com/challenge/pokemons/random?any=1")
      .then(res => res.json())
      .then(data => this.setState({ data: data, loader: false }))
      .catch(err => alert(`Failed to fetch data from server ${err}`));
  }
  render() {
    let { data, loader } = this.state;
    return (
      <div>
        {loader && <Loader />}
        <div className="App">
          {/* looping over data and generating UI */}
          {data && data.map(card => <Card key={card.tag} card={card} />)}
        </div>
      </div>
    );
  }
}

export default App;
