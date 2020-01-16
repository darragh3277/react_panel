import React from 'react';
import {
    Link
  } from "react-router-dom";
import { sidebarLinks } from '../sidebar/SidebarLinks';

class CollapsedNavBar extends React.Component {
    render(){
        return (
            <div className="collapse navbar-collapse d-md-none ml-4" id="toggleCollapsedNavBar">
                <ul className="navbar-nav">
                    {sidebarLinks.map((link,i)=>
                        <li className="nav-item" key={i} >
                            <Link className="nav-link text-light" to={link.path}>{link.icon} {link.label}</Link>
                        </li>
                    )}                    
                </ul>
            </div>
        );
    }
  }
  
  export default CollapsedNavBar;