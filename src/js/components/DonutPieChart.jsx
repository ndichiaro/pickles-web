import React, { Component } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

class DonutPieChart extends Component{
    constructor(props){
        super(props);

        this.state = {
            activeIndex: -1
        }

        this.onPieEnter = this.onPieEnter.bind(this);
    }
    
    onPieEnter(data, index){
        this.setState({
            activeIndex: index,
        });
    }

    renderActiveShape(props){
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
            fill, payload, percent, value } = props;
        const RADIAN = Math.PI / 180;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 50) * cos;
        const my = cy + (outerRadius + 50) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 50;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 10}
                    outerRadius={outerRadius + 20}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} stroke-width="4" fill="none"/>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill}>{`${Math.round(percent * 100)}%`}</text>
            </g>
        );
    }

    render(){
        const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        return(
            <PieChart width={1000} height={800}>
                <Pie
                    data={data}
                    outerRadius={200}
                    innerRadius={160}
                    activeIndex={this.state.activeIndex}
                    activeShape={this.renderActiveShape}
                    onMouseEnter={this.onPieEnter}
                >
                    { data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>) }
                </Pie>
            </PieChart>
        )
    }
}
export default DonutPieChart;