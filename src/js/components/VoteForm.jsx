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

    /**
     * @summary renders option tags for a select based on 
     * the pickly style propery
     */
    renderPickleStyleOptions(){
        let options = null;
        let pickleStyles = this.props.data.pickleStyles;

        if(pickleStyles !== undefined){
            options = pickleStyles.map((type) => {
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
            <div className="vote-form">
                {this.renderError()}
                <form onChange={this.props.onChange} onSubmit={this.props.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-lg-6">
                            <label htmlFor="txtFirstName">First Name</label>
                            <input type="text" className="form-control" id="txtFirstName" placeholder="Enter First Name" name="firstName" value={this.props.data.firstName} />       
                        </div>
                        <div className="form-group col-lg-6">
                            <label htmlFor="txtLastName">Last Name</label>
                            <input type="text" className="form-control" id="txtLastName" placeholder="Enter Last Name" name="lastName" value={this.props.data.lastName}/>       
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-lg-6">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" value={this.props.data.email} pattern='+@[a-z0-9.-]+\.[a-z]{2,4}$/'/>
                        </div>
                        <div className="form-group col-lg-6">
                            <label htmlFor="pickleTypeSelect">Pickle Type</label>
                            <select className="form-control" id="pickleTypeSelect" required name="pickleType" value={this.props.data.pickleType}>
                                <option value="">-- Select --</option>
                                {this.renderPickleTypeOptions()}
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-lg-6">
                            <label htmlFor="pickleStyleSelect">Pickle Style</label>
                            <select className="form-control" id="pickleStyleSelect" required name="pickleStyle" value={this.props.data.pickleStyle}>
                                <option value="">-- Select --</option>
                                {this.renderPickleStyleOptions()}
                            </select>
                        </div>
                        <div className="form-group col-lg-6">
                            <label htmlFor="txtZipCode">Zip Code</label>
                            <input type="text" className="form-control" id="txtZipCode" placeholder="Enter Zip Code" required maxLength="5" name="zipCode" value={this.props.data.zipCode}/>       
                        </div>
                    </div>
                    <button type="submit" className="btn btn-lg btn-success btn-block">Submit</button>
                </form>
            </div>
        );
    }
}
export default VoteForm;