import React, { Component } from 'react';
import Banner from './Banner';
import '../../css/App.css';

class App extends Component {
  getPickleTypes(){
    return [
        {
            id: 1,
            name: "Dill"
        },
        {
            id: 2,
            name: "Sweet"
        }
    ];
  }

  render() {
    return (
      <div className="App">
        <Banner getPickleTypes={this.getPickleTypes}/>
      </div>
    );
  }
}

export default App;
