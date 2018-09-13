import React, { Component } from 'react';
import Banner from './Banner';
import DonutPieChart from '../components/DonutPieChart';
import '../../css/App.css';

class App extends Component {
  render() {
    const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
      <div className="App">
        <Banner />
        <DonutPieChart data={data} colors={COLORS} outerRadius={200} innerRadius={140} dataKey="value"
                    nameKey="name" width={650} height={650}/>
      </div>
    );
  }
}

export default App;
