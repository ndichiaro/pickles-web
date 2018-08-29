import React, { Component } from 'react';
import VoteForm from '../components/VoteForm';
import '../../css/Banner.css';

class Banner extends Component {
    render(){
        return(
            <div className="jumbotron">
                <VoteForm pickleTypes={this.props.getPickleTypes()}/>
            </div>
        );
    }
}
export default Banner;