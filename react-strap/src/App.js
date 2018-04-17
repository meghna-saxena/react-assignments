import React, { Component } from 'react';
// import './App.css';
import './css/bootstrap.css';
import './css/style.css';
import NavBar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Page from './components/Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar brand="ReactStrap" />
        <Jumbotron heading="Hello world" text="This is a Bootstrap theme that uses React.js components" />
        <Page />
      </div>
    );
  }
}

export default App;
