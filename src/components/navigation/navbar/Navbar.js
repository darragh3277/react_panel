import React from 'react';
import { Link } from 'react-router-dom';
import CollapsedNavBar from './CollapsedNavBar';
import NotificationsMenu from '../notifications/NotificationMenu';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top p-0 border-bottom border-dark">
      <div className="col-md-3 col-lg-2 pl-0">
        <button
          className="navbar-toggler text-light ml-4 d-md-none"
          type="button"
          data-toggle="collapse"
          data-target="#toggleCollapsedNavBar"
          aria-controls="toggleCollapsedNavBar"
          aria-expanded="false"
          aria-label="Toggle sidebar"
        >
          <span className="navbar-toggler-icon text-light" />
        </button>
        <Link className="navbar-brand text-light ml-4 mr-4 mr-0" to="/">
          Company name
        </Link>
        <CollapsedNavBar />
      </div>
      <div className="col-md-4 col-lg-3">
        <NotificationsMenu />
      </div>
    </nav>
  );
};

export default Navbar;
