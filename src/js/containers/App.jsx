import React, { Component } from 'react';
import Banner from './Banner';
import DonutPieChart from '../components/DonutPieChart';
import '../../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <DonutPieChart />
      </div>
    );
  }
}

export default App;
