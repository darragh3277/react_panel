import React from 'react';

const AccountDetails = () => {
  return (
    <>
      <div className="card card-small">
        <div className="card-body pt-1">
          <div className="card-header px-0">
            <h6>Account Details</h6>
          </div>
          <form className="pt-3">
            <div className="form-row">
              <label
                className="form-group col-md-6 font-weight-bold"
                htmlFor="firstName"
              >
                First Name
                <div className="input-group">
                  <input
                    type="text"
                    id="firstName"
                    className="form-control form-control-sm rounded"
                    required
                  />
                  <div className="input-group-append">
                    <span className="clear-input cursor-pointer">x</span>
                  </div>
                </div>
              </label>
              <label
                className="font-weight-bold form-group col-md-6"
                htmlFor="lastName"
              >
                Last Name
                <div className="input-group">
                  <input
                    type="text"
                    id="lastName"
                    className="form-control form-control-sm rounded"
                    required
                  />
                  <div className="input-group-append">
                    <span className="clear-input cursor-pointer">x</span>
                  </div>
                </div>
              </label>
            </div>
            <div className="form-row">
              <label
                className="font-weight-bold form-group col"
                htmlFor="email"
              >
                Email
                <div className="input-group">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-sm rounded"
                    required
                  />
                  <div className="input-group-append">
                    <span className="clear-input cursor-pointer">x</span>
                  </div>
                </div>
              </label>
            </div>
            <div className="form-row">
              <label
                className="font-weight-bold form-group col-md-6"
                htmlFor="new_password"
              >
                New Password
                <div className="input-group">
                  <input
                    type="password"
                    id="new_password"
                    className="form-control form-control-sm rounded"
                  />
                  <div className="input-group-append">
                    <span className="clear-input cursor-pointer">x</span>
                  </div>
                </div>
              </label>
              <label
                className="font-weight-bold form-group col-md-6"
                htmlFor="old_password"
              >
                Confirm Password
                <div className="input-group">
                  <input
                    type="password"
                    id="old_password"
                    className="form-control form-control-sm rounded"
                  />
                  <div className="input-group-append">
                    <span className="clear-input cursor-pointer">x</span>
                  </div>
                </div>
              </label>
            </div>
            <div className="form-row">
              <label
                className="font-weight-bold form-group col"
                htmlFor="description"
              >
                Description
                <textarea
                  className="form-control form-control-sm"
                  id="description"
                  rows="3"
                />
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-sm float-right"
            >
              Update Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
