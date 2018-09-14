import React, { Component } from 'react';
import Banner from './Banner';
import Visualizations from './Visualizations';
import '../../css/App.css';

class App extends Component {
  render() {
      return (
      <div className="App">
        <Banner />
        <Visualizations />
      </div>
    );
  }
}

export default App;
