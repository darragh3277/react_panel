import React from 'react';

class AccountDetails extends React.Component {
    render () {
        return (
            <>
                <div className="card card-small">
                    <div className="card-body pt-1">
                        <div className="card-header px-0">
                            <h6>Account Details</h6>
                        </div>
                        <form className="pt-3">
                        <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="font-weight-bold" htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" className="form-control form-control-sm" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="font-weight-bold" htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" className="form-control form-control-sm" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label className="font-weight-bold" htmlFor="email">Email</label>
                                    <input type="email" id="email" className="form-control form-control-sm" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="font-weight-bold" htmlFor="new_password">New Password</label>
                                    <input type="password" id="new_password" className="form-control form-control-sm" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="font-weight-bold" htmlFor="old_password">Confirm Password</label>
                                    <input type="password" id="old_password" className="form-control form-control-sm" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label className="font-weight-bold" htmlFor="description">Description</label>
                                    <textarea className="form-control form-control-sm" id="description" rows="3"></textarea>
                                </div>
                            </div>
                            <button className="btn btn-primary btn-sm float-right">Update Account</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
  
export default AccountDetails;