import React from 'react';
import CollapsedNavBar from './CollapsedNavBar';
import NotificationsMenu from '../notifications/NotificationMenu';
import {
    Link
  } from "react-router-dom";
import './Navbar.css'

class Navbar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark sticky-top p-0">
                    <div className="col-md-8 col-lg-9 pl-0">
                        <button 
                            class="navbar-toggler text-light ml-4 d-md-none" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#toggleCollapsedNavBar" 
                            aria-controls="toggleCollapsedNavBar" 
                            aria-expanded="false" 
                            aria-label="Toggle sidebar">
                            <span class="navbar-toggler-icon text-light"></span>
                        </button>
                        <Link className="navbar-brand text-light ml-4 mr-4 mr-0" to="/">Company name</Link>
                        <CollapsedNavBar />
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <NotificationsMenu />
                    </div>
            </nav>
        );
    }
  }
  
  export default Navbar;