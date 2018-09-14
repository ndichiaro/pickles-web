import React, { Component } from 'react';
import PickleTypeChart from '../components/PickleTypeChart';
import * as votesApi from '../api/votesApi';

/**
 * @summary A React container component that contains the visualization
 * components that represent to vote data. 
 */
class Visualizations extends Component{
    constructor(props){
        super(props);

        this.state = {
            votes: [],
            chartData: []
        }
    }

    componentDidMount(){
        votesApi.get()
            .then(data => {
                this.setState({
                    votes: data
                });
                return data;
            })
            .then(data => {
                let chartData = this.groomChartData(data);
                this.setState({
                    chartData
                })
            });
    }

    /**
     * @summary Grooms the vote data into data the chart can use. Maps the 
     * pickle type name to the name property and counts the number of votes
     * and assigns to the value property
     * @param {*} data 
     */
    groomChartData(data){
        let chartData = [];

        this.props.pickleTypes.forEach(type => {
            let votes = this.state.votes.filter(vote => vote.pickleTypeId === type.id);
            
            chartData.push({
                name: type.name,
                value: votes.length
            });
        });
        console.log(chartData);
        return chartData;
    }

    render(){
        const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];

        return(
            <div className="container">
                <PickleTypeChart data={this.state.chartData}/>        
            </div>
        );
    }
}
export default Visualizations;