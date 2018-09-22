import React, { Component } from 'react';
import DonutPieChart from './DonutPieChart';
import '../../css/PickleStyleChart.css';

class PickleStyleChart extends Component{
    render(){
        const COLORS = ['#78b5f7', '#40e73b', '#713cfe', '#f6bb31', '#f864a1', '#48f2fe', '#d2eb74', '#36979f', '#95e9de'];

        return (
            <div className="row">
                <div className="col-lg">
                    <DonutPieChart data={this.props.data} colors={COLORS} outerRadius={200} innerRadius={140} dataKey="value"
                            nameKey="name" width={450} height={450}/>
                </div>
                <div className="col-lg">
                    <div className="pickle-style-description">
                        <h2>It's not always just about flavor</h2>
                        <p>Shape and size matter too.</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default PickleStyleChart;