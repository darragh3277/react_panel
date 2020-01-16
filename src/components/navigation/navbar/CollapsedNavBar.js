import React from 'react';
import {
    Link
  } from "react-router-dom";
import { sidebarLinks } from '../sidebar/SidebarLinks';

class CollapsedNavBar extends React.Component {
    render(){
        return (
            <div class="collapse navbar-collapse d-md-none ml-4" id="toggleCollapsedNavBar">
                <ul class="navbar-nav">
                    {sidebarLinks.map((link,i)=>
                        <li className="nav-item">
                            <Link key={i} className="nav-link text-light" to={link.path}>{link.icon} {link.label}</Link>
                        </li>
                    )}                    
                </ul>
            </div>
        );
    }
  }
  
  export default CollapsedNavBar;