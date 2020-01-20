import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <div className="col-1 px-0 text-center">
      <img
        src="images/default_profile.png"
        className="dropdown-toggle cursor-pointer rounded-circle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        alt="Profile icon"
      />
      <div className="dropdown-menu cursor-pointer">
        <Link className="dropdown-item" to="/account">
          Account
        </Link>

        <div className="dropdown-divider" />
        <a className="dropdown-item" href="/">
          Logout
        </a>
      </div>
    </div>
  );
};

export default Account;
