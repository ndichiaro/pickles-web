import React, { Component } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

class DonutPieChart extends Component{
    constructor(props){
        super(props);

        this.state = {
            activeIndex: -1
        }

        this.onPieEnter = this.onPieEnter.bind(this);
        this.onPieChartLeave = this.onPieChartLeave.bind(this);
    }
    
    onPieEnter(data, index){
        this.setState({
            activeIndex: index,
        });
    }

    onPieChartLeave(){
        let that = this;

        setTimeout(function () {
            that.setState({
                activeIndex: -1,
            });
        }, 500);
    }

    renderActiveShape(props){
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
            fill, payload, percent, value } = props;

        return (
            <g>
                <text x={cx} y={cy - 10} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
                <text x={cx} y={cy + 10} dy={8} textAnchor="middle" fill={fill}>{`${Math.round(percent * 100)}%`}</text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius + 20}
                    outerRadius={outerRadius + 20}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={innerRadius}
                    outerRadius={innerRadius + 10}
                    fill={fill}
                />
            </g>
        );
    }

    render(){
        const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        return(
            <PieChart width={650} height={650} onMouseLeave={this.onPieChartLeave}>
                <Pie
                    data={data}
                    outerRadius={200}
                    innerRadius={140}
                    activeIndex={this.state.activeIndex}
                    activeShape={this.renderActiveShape}
                    onMouseEnter={this.onPieEnter}
                    dataKey="value"
                    nameKey="name"
                >
                    { data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>) }
                </Pie>
            </PieChart>
        )
    }
}
export default DonutPieChart;