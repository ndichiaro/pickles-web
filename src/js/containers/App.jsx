import React, { Component } from 'react';
import Banner from './Banner';
import Visualizations from './Visualizations';
import * as pickleTypesApi from '../api/pickleTypesApi';
import * as pickleStylesApi from '../api/pickleStylesApi';
import '../../css/App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pickleTypes: [],
      pickleStyles: [],
      update: false
    }

    this.triggerUpdate = this.triggerUpdate.bind(this);
  }

  componentDidMount(){
    let pickleTypes = [];
    let pickleStyles = [];

    pickleTypesApi.get()
            .then((data) => {
                pickleTypes = data;
            })
            .then(() => {
                pickleStylesApi.get()
                  .then((data) => {
                      pickleStyles = data;
                  })
                  .then(() => {
                      this.setState({
                          pickleTypes,
                          pickleStyles
                      })
                  });
            });
  }

  /**
   * @summary Set the update state to trigger components to update
   */
  triggerUpdate(update){
    this.setState({
      update
    });
  }

  render() {
      let props = {
        pickleTypes: this.state.pickleTypes,
        pickleStyles: this.state.pickleStyles,
        triggerUpdate: this.triggerUpdate
      }

      return (
      <div className="App">
        <Banner {...props} />
        <Visualizations {...props} update={this.state.update} />
      </div>
    );
  }
}

export default App;