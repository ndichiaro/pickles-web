import React, { Component } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

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
        }, 250);
    }

    renderActiveShape(props){
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
            fill, payload, percent, value } = props;

        return (
            <g>
                <text x={cx} y={cy - 20} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{`Votes: ${value}`}</text>
                <text x={cx} y={cy + 20} dy={8} textAnchor="middle" fill={fill}>{`${Math.round(percent * 100)}%`}</text>
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
        return(
            <ResponsiveContainer width="100%" height={this.props.height}>
                <PieChart width={this.props.width} height={this.props.height} 
                    onMouseLeave={this.onPieChartLeave}>
                    <Pie
                        data={this.props.data}
                        outerRadius={this.props.outerRadius}
                        innerRadius={this.props.innerRadius}
                        activeIndex={this.state.activeIndex}
                        activeShape={this.renderActiveShape}
                        onMouseEnter={this.onPieEnter}
                        dataKey={this.props.dataKey}
                        nameKey={this.props.nameKey}
                    >
                        { this.props.data.map((entry, index) => <Cell key={index} 
                            fill={this.props.colors[index % this.props.colors.length]}/>) }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        )
    }
}
export default DonutPieChart;