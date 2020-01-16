import React from 'react';
import {
    Link
  } from "react-router-dom";
import './Navbar.css'

class Navbar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-light bg-dark sticky-top p-0">
                <Link className="navbar-brand text-light col-sm-3 col-md-2 mr-0" to="/">Company name</Link>
            </nav>
        );
    }
  }
  
  export default Navbar;