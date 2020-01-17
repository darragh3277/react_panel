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
                        <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label className="font-weight-bold" for="firstName">First Name</label>
                                    <input type="text" id="firstName" class="form-control form-control-sm" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label className="font-weight-bold" for="lastName">Last Name</label>
                                    <input type="text" id="lastName" class="form-control form-control-sm" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col">
                                    <label className="font-weight-bold" for="email">Email</label>
                                    <input type="email" id="email" class="form-control form-control-sm" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label className="font-weight-bold" for="new_password">New Password</label>
                                    <input type="password" id="new_password" class="form-control form-control-sm" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label className="font-weight-bold" for="old_password">Confirm Password</label>
                                    <input type="password" id="old_password" class="form-control form-control-sm" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col">
                                    <label className="font-weight-bold" for="description">Description</label>
                                    <textarea class="form-control form-control-sm" id="description" rows="3"></textarea>
                                </div>
                            </div>
                            <button class="btn btn-primary btn-sm">Update Account</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
  
export default AccountDetails;