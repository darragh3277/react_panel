import React from 'react';
import {
    Link
  } from "react-router-dom";
import { sidebarLinks } from './SidebarLinks';

class CollapsedSideBar extends React.Component {
    render(){
        return (
            <div class="collapse navbar-collapse d-md-none ml-3" id="toggleCollapsedSideBar">
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
  
  export default CollapsedSideBar;