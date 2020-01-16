import React from 'react';
import {
    Link
  } from "react-router-dom";
import './Navbar.css'
import CollapsedSideBar from '../sidebar/CollapsedSideBar';

class Navbar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark sticky-top p-0">
                <button 
                    class="navbar-toggler text-light ml-3 d-md-none" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#toggleCollapsedSideBar" 
                    aria-controls="toggleCollapsedSideBar" 
                    aria-expanded="false" 
                    aria-label="Toggle sidebar">
                    <span class="navbar-toggler-icon text-light"></span>
                </button>
                <Link className="navbar-brand text-light ml-3 mr-3 mr-0" to="/">Company name</Link>
                <CollapsedSideBar />
            </nav>
        );
    }
  }
  
  export default Navbar;