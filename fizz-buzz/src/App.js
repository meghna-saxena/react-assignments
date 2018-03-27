import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1, //initializing state properties
      message: ''
    }
  }

  //state rerenders when the conditons of this func are met
  fizzBuzz = (count) => {
    if (count % 3 === 0) {
      this.setState({ message: 'Fizz' });
    } else if (count % 5 === 0) {
      this.setState({ message: 'Buzz' });
    } else {
      this.setState({ message: '' });
    }
  }

  decrement = () => {
    if (this.state.count > 1) {
      this.setState({ count: this.state.count - 1 })
      this.fizzBuzz(this.state.count);
    }
  }

  increment = () => {
    if (this.state.count < 100) {
      this.setState({ count: this.state.count + 1 })
      this.fizzBuzz(this.state.count);
    }
  }

  render() {
    const style = {
      fontSize: '64px',
      textAlign: 'center'
    };

    return (
      <div className="App">
        <h1 style={style}>
          {this.state.message || this.state.count}
        </h1>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default App;
