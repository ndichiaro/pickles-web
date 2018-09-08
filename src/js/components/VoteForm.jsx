import React, { Component } from 'react';
import '../../css/VoteForm.css';

class VoteForm extends Component{
    /**
     * @summary renders option tags for a select based on 
     * the pickly type propery
     */
    renderPickleTypeOptions(){
        let options = null;
        let pickleTypes = this.props.data.pickleTypes;

        if(pickleTypes !== undefined){
            options = pickleTypes.map((type) => {
                return (<option key={type.id} value={type.id}>{type.name}</option>);
            });
        }
        return options;
    }

    render(){
        return(
            <div className="col-md-4">
                <div className="vote-form">
                    <form onChange={this.props.onChange}>
                        <div className="form-group">
                            <label htmlFor="txtFirstName">First Name</label>
                            <input type="text" className="form-control" id="txtFirstName" placeholder="Enter First Name" name="firstName" value={this.props.data.firstName} />       
                        </div>
                        <div className="form-group">
                            <label htmlFor="txtLastName">Last Name</label>
                            <input type="text" className="form-control" id="txtLastName" placeholder="Enter Last Name" name="lastName" value={this.props.data.lastName}/>       
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" name="email" value={this.props.data.email}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never send you anything or share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pickleTypeSelect">Pickle Type</label>
                            <select className="form-control" id="pickleTypeSelect" required name="pickleType" value={this.props.data.pickleType}>
                                <option value="">Select Pickle Type</option>
                                {this.renderPickleTypeOptions()}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="txtZipCode">Zip Code</label>
                            <input type="text" className="form-control" id="txtZipCode" placeholder="Enter Zip Code" required maxLength="5" name="zipCode" value={this.props.data.zipCode}/>       
                        </div>
                        <button type="submit" className="btn btn-lg btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default VoteForm;