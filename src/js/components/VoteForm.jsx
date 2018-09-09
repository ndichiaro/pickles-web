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

    renderError(){
        if(this.props.error && this.props.message !== ''){
            return <div className="error">{this.props.message}</div>
        }

        if(this.props.success){
            return <div className="success">Thanks for your vote!</div>
        }

        return;
    }
    render(){
        return(
            <div className="col-md-4">
                <div className="vote-form">
                    {this.renderError()}
                    <form onChange={this.props.onChange} onSubmit={this.props.onSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="txtFirstName">First Name</label>
                                <input type="text" className="form-control" id="txtFirstName" placeholder="Enter First Name" name="firstName" value={this.props.data.firstName} />       
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="txtLastName">Last Name</label>
                                <input type="text" className="form-control" id="txtLastName" placeholder="Enter Last Name" name="lastName" value={this.props.data.lastName}/>       
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" name="email" value={this.props.data.email} pattern='+@[a-z0-9.-]+\.[a-z]{2,4}$/'/>
                            <small id="emailHelp" className="form-text text-muted">We'll never send you anything or share your email with anyone else.</small>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="pickleTypeSelect">Pickle Type</label>
                                <select className="form-control" id="pickleTypeSelect" required name="pickleType" value={this.props.data.pickleType}>
                                    <option value="">Select Pickle Type</option>
                                    {this.renderPickleTypeOptions()}
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="txtZipCode">Zip Code</label>
                                <input type="text" className="form-control" id="txtZipCode" placeholder="Enter Zip Code" required maxLength="5" name="zipCode" value={this.props.data.zipCode}/>       
                            </div>
                        </div>
                        <button type="submit" className="btn btn-lg btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default VoteForm;