import React from 'react';
import {
    Link
  } from "react-router-dom";

class Navbar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-light bg-dark sticky-top p-1">
                <Link className="navbar-brand text-light" to="/">Home</Link>
                <Link className="nav-link text-light" to="/about">About</Link>
            </nav>
        );
    }
  }
  
  export default Navbar;