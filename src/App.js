import React, { Component } from "react";
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Charcard from './components/Charcard/Charcard';
import bobs from "./bobs.json";
import './App.css';

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {

  state = {
    bobs:bobs,
    points: 0
  };

  componentDidMount () {
    this.handlePoints();
  }
  
  handlePoints = (clicked) => {
    console.log("This logged from handlePoints:" , clicked)
    if (clicked) {
      this.setState({points: this.state.points +1})
    }
    if (!clicked) {
      this.setState({points: 0})
      this.score = this.state.points
    }
  }
  
  render() {
    const shuffledBobs = shuffleArray(this.state.bobs);
    return (
      <div>
      <Navbar
      points={this.state.points}
      score={this.score}
      />
    <Wrapper>    
    {shuffledBobs.map(character => (
        <Charcard 
        id={character.id}
        key={character.id}
        name={character.name}
        image={character.image}
        handlePoints={this.handlePoints}
        />
      ))}
    </Wrapper>
    </div>
    );
  }
}

export default App;
