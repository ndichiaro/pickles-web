import React, { Component } from 'react';
import VoteForm from '../components/VoteForm';
import * as pickleTypesApi from '../api/pickleTypesApi';
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
            zipCode: ''
        }

        this.handleVoteFormChange = this.handleVoteFormChange.bind(this);
    }

    componentDidMount(){
        pickleTypesApi.get()
            .then((data) => {
                this.setState({
                    pickleTypes: data
                });
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
                <VoteForm data={data} onChange={this.handleVoteFormChange}/>
            </div>
        );
    }
}
export default Banner;