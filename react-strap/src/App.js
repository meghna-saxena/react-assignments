import React, { Component } from 'react';
// import './App.css';
import './css/bootstrap.css';
import './css/style.css';
import NavBar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Page from './components/Page';

class App extends Component {
  state = {
    currentPage: "about",
    brand: "ReactStrap",
    heading: "Hello world",
    text: "This is a Bootstrap theme that uses React.js components"

  }
  // getDefaultProps() {
  //   return {
  //     brand: "DefaultBrand"
  //   }
  // }
  render() {
    return (
      <div className="App">
        <NavBar currentPage={this.state.currentPage} brand={this.state.brand} />
        <Jumbotron heading={this.state.heading} text={this.state.text} />
        <Page currentPage={this.state.currentPage} />
      </div>
    );
  }
}

export default App;
