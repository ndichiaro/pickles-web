import React, { Component } from 'react';
import PickleTypeChart from '../components/PickleTypeChart';

class Visualizations extends Component{
    render(){
        const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];

        return(
            <div className="container">
                <PickleTypeChart data={data}/>        
            </div>
        );
    }
}
export default Visualizations;