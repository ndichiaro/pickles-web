import React, { Component } from 'react';
import VoteForm from '../components/VoteForm';
import '../../css/Banner.css';

class Banner extends Component {
    render(){
        return(
            <div className="jumbotron">
                <VoteForm />
            </div>
        );
    }
}
export default Banner;