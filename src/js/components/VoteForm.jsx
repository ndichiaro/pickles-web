import React, { Component } from 'react';
import '../../css/VoteForm.css';

class VoteForm extends Component{
    /**
     * @summary renders option tags for a select based on 
     * the pickly type propery
     */
    renderPickleTypeOptions(){
        let options = null;

        if(this.props.pickleTypes !== undefined){
            options = this.props.pickleTypes.map((type) => {
                return (<option key={type.id} value={type.id}>{type.name}</option>);
            });
        }
        return options;
    }

    render(){
        return(
            <div className="col-md-4">
                <div className="vote-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="txtFirstName">First Name</label>
                            <input type="text" className="form-control" id="txtFirstName" placeholder="Enter First Name" />       
                        </div>
                        <div className="form-group">
                            <label htmlFor="txtLastName">Last Name</label>
                            <input type="text" className="form-control" id="txtLastName" placeholder="Enter Last Name" />       
                        </div>
                        <div className="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never send you anything or share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="pickleTypeSelect">Pickle Type</label>
                            <select className="form-control" id="pickleTypeSelect" required>
                                <option value="">Select Pickle Type</option>
                                {this.renderPickleTypeOptions()}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="txtZipCode">Zip Code</label>
                            <input type="text" className="form-control" id="txtZipCode" placeholder="Enter Zip Code" required/>       
                        </div>
                        <button type="submit" className="btn btn-lg btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default VoteForm;