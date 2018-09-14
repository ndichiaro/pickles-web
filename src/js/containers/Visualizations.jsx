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
            });
    }

    componentDidUpdate(prevProps){
        if(prevProps.pickleTypes !== this.props.pickleTypes){
            let chartData = this.groomChartData(this.props.votes);
                this.setState({
                    chartData
                });
        }
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
        return chartData;
    }

    render(){
        return(
            <div className="container">
                <PickleTypeChart data={this.state.chartData}/>        
            </div>
        );
    }
}
export default Visualizations;