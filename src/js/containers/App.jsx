import React, { Component } from 'react';
import Banner from './Banner';
import PickleTypeChart from '../components/PickleTypeChart';
import '../../css/App.css';

class App extends Component {
  render() {
    const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];

    return (
      <div className="App">
        <Banner />
        <div className="container">
          <PickleTypeChart data={data}/>        
        </div>
      </div>
    );
  }
}

export default App;
