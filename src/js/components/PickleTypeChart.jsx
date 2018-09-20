import React, { Component } from 'react';
import DonutPieChart from './DonutPieChart';
import '../../css/PickleTypeChart.css';

class PickleTypeChart extends Component{
    render(){
        
        const COLORS = ['#0f3a0f', '#155116', '#1c6b1e', '#258c28', '#30b534', '#3be540'];

        return(
            <div className="row">
                <div className="col-lg">
                    <div className="pickle-type-description">
                        <h2>One to rule them all?</h2>
                        <p>We all love pickles, but which one separates itself from the rest?</p>
                    </div>
                </div>
                <div className="col-lg">
                    <DonutPieChart data={this.props.data} colors={COLORS} outerRadius={200} innerRadius={140} dataKey="value"
                            nameKey="name" width={450} height={450}/>
                </div>
            </div>
        );
    }
}
export default PickleTypeChart;