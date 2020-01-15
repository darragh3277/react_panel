import React from 'react';
import {
    Link
  } from "react-router-dom";

class Navbar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
            </nav>
        );
    }
  }
  
  export default Navbar;