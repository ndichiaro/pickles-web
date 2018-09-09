import React, { Component } from 'react';
import VoteForm from '../components/VoteForm';
import * as pickleTypesApi from '../api/pickleTypesApi';
import * as votesApi from '../api/votesApi';
import '../../css/Banner.css';

class Banner extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            pickleType: '',
            pickleTypes: [],
            zipCode: '',
            latitude: '',
            longitude: '',
            message: '',
            error: false,
            success: false
        }

        this.handleVoteFormChange = this.handleVoteFormChange.bind(this);
        this.handleVoteFormSubmit = this.handleVoteFormSubmit.bind(this);
        this.getLocation = this.getLocation.bind(this);   
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.getLocation)
        pickleTypesApi.get()
            .then((data) => {
                this.setState({
                    pickleTypes: data
                });
            });
    }

    getLocation(position){
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }

    handleVoteFormChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    
    handleVoteFormSubmit(event){
        votesApi.save({
            pickleTypeId: this.state.pickleType,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            zipCode: this.state.zipCode,
            latitude: this.state.latitude,
            longitude: this.state.longitude
        }).then(response => {
            if(response.status === 409){
                response.text().then(text => {
                    this.setState({
                        error: true,
                        success: false,
                        message: text
                    });
                });
            }else if(response.status === 200){
                this.setState({
                    error: false,
                    success: true,
                    message: ''
                })
            }
        });

        event.preventDefault();
    }

    render(){
        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            pickleType: this.state.pickleType,
            pickleTypes: this.state.pickleTypes,
            zipCode: this.state.zipCode
        }
        return(
            <div className="jumbotron">
                <VoteForm data={data} onChange={this.handleVoteFormChange} 
                    onSubmit={this.handleVoteFormSubmit} error={this.state.error} 
                    success={this.state.success} message={this.state.message} />
            </div>
        );
    }
}
export default Banner;