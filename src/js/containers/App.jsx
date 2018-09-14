import React, { Component } from 'react';
import Banner from './Banner';
import Visualizations from './Visualizations';
import * as pickleTypesApi from '../api/pickleTypesApi';
import '../../css/App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pickleTypes: []
    }
  }

  componentDidMount(){
    pickleTypesApi.get()
            .then((data) => {
                this.setState({
                    pickleTypes: data
                });
            });
  }

  render() {
      return (
      <div className="App">
        <Banner pickleTypes={this.state.pickleTypes} />
        <Visualizations pickleTypes={this.state.pickleTypes}/>
      </div>
    );
  }
}

export default App;
