import React from 'react';
import {
    Link
  } from "react-router-dom";
import { mainContentLinks, subContentLinks } from '../sidebar/SidebarLinks';

class CollapsedNavBar extends React.Component {

    renderMainContentLinks = () => {
        return (
            <>
                {mainContentLinks.map((link,i)=>
                    <li className="nav-item ml-1" key={i}>
                        <Link className="nav-link text-secondary" to={link.path}>{link.icon} {link.label}</Link>
                    </li>
                )}
            </>
        )
    }

    renderSubContentLinks = () => {
        return (
            <>
                {subContentLinks.map((link,i)=>
                    <li className="nav-item ml-1" key={i}>
                        <Link className="nav-link text-secondary" to={link.path}>{link.icon} {link.label}</Link>
                    </li>
                )}
            </>
        )
    }

    render(){
        return (
            <div className="collapse navbar-collapse d-md-none ml-4" id="toggleCollapsedNavBar">
                <ul className="navbar-nav">
                    {this.renderMainContentLinks()}
                </ul>
                <hr />
                <ul className="navbar-nav">
                    {this.renderSubContentLinks()}
                </ul>
            </div>
        );
    }
  }
  
  export default CollapsedNavBar;