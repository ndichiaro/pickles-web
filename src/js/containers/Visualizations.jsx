import React, { Component } from 'react';
import PickleTypeChart from '../components/PickleTypeChart';
import PickleStyleChart from '../components/PickleStyleChart';
import * as votesApi from '../api/votesApi';
import '../../css/Visualizations.css';

/**
 * @summary A React container component that contains the visualization
 * components that represent to vote data. 
 */
class Visualizations extends Component{
    constructor(props){
        super(props);

        this.state = {
            votes: [],
            typeChartData: [],
            styleChartData: []
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
                let typeChartData = this.groomTypeChartData(data);
                let styleChartData = this.groomStyleChartData(data);

                this.setState({
                    typeChartData,
                    styleChartData
                });
            });
    }

    componentDidUpdate(prevProps){
        if(prevProps.pickleTypes !== this.props.pickleTypes){
            let typeChartData = this.groomTypeChartData(this.state.votes);
            let styleChartData = this.groomStyleChartData(this.state.votes);

            this.setState({
                typeChartData,
                styleChartData
            });
        }
    }

    /**
     * @summary Grooms the vote data into data the chart can use. Maps the 
     * pickle type name to the name property and counts the number of votes
     * and assigns to the value property
     * @param {*} data 
     */
    groomTypeChartData(data){
        let typeChartData = [];

        this.props.pickleTypes.forEach(type => {
            let votes = data.filter(vote => vote.pickleTypeId === type.id);
            
            typeChartData.push({
                name: type.name,
                value: votes.length
            });
        });
        return typeChartData;
    }

    /**
     * @summary Grooms the vote data into data the chart can use. Maps the 
     * pickle style name to the name property and counts the number of votes
     * and assigns to the value property
     * @param {*} data 
     */
    groomStyleChartData(data){
        let styleChartData = [];

        this.props.pickleStyles.forEach(style => {
            let votes = data.filter(vote => vote.pickleStyleId === style.id);
            
            styleChartData.push({
                name: style.name,
                value: votes.length
            });
        });
        return styleChartData;
    }

    render(){
        return(
            <div className="container">
                <div className="visualization-row">
                    <PickleTypeChart data={this.state.typeChartData}/>
                </div>
                <div className="visualization-row">
                    <PickleStyleChart data={this.state.styleChartData}/>        
                </div>
            </div>
        );
    }
}
export default Visualizations;