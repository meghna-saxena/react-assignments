import React, { Component } from 'react';
// import './App.css';
import './css/bootstrap.css';
import './css/style.css';
import NavBar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Page from './components/Page';

class App extends Component {
  // getDefaultProps() {
  //   return {
  //     brand: "DefaultBrand"
  //   }
  // }
  render() {
    return (
      <div className="App">
        <NavBar currentPage="home" brand="ReactStrap" />
        <Jumbotron heading="Hello world" text="This is a Bootstrap theme that uses React.js components" />
        <Page currentPage="home" />
      </div>
    );
  }
}

export default App;
