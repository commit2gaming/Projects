import React, { Component } from 'react';
import Navbar from './Components/navbar';
import Header from './Components/header';
import MainColumn from './Components/mainColumn';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <MainColumn />
      </div>
    );
  }
}

export default App;
 