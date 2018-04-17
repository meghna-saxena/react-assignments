import React, { Component } from 'react';
// import './App.css';
import './css/bootstrap.css';
import './css/style.css';
import NavBar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Page from './components/Page';

class App extends Component {
  state = {
    currentPage: "home",
    brand: "ReactStrap",
    heading: "Hello world",
    text: "This is a Bootstrap theme that uses React.js components"
  }
  
  changeHandler(page) {
    this.setState({currentPage: page})
  };

  render() {
    var jumbotron;
    if (this.state.currentPage == 'home') {
      jumbotron = <Jumbotron heading={this.state.heading} text={this.state.text} />;
    } else {
      jumbotron = '';
    }

    return (
      <div className="App">
        <NavBar currentPage={this.state.currentPage} brand={this.state.brand} click={this.changeHandler.bind(this)} />
        {jumbotron}
        <Page currentPage={this.state.currentPage} />
      </div>
    );
  }
}

export default App;
