import React, { Component } from 'react';
import '../../css/VoteForm.css';

class VoteForm extends Component{
    render(){
        return(
            <div className="col-4">
                <div className="vote-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="txtFirstName">First Name</label>
                            <input type="text" className="form-control" id="txtFirstName" placeholder="Enter first name" />       
                        </div>
                        <div className="form-group">
                            <label htmlFor="txtLastName">Last Name</label>
                            <input type="text" className="form-control" id="txtLastName" placeholder="Enter last name" />       
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <button type="submit" className="btn btn-lg btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default VoteForm;