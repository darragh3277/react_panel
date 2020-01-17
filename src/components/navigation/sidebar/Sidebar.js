import React from 'react';
import { Link } from "react-router-dom";
import { mainContentLinks, subContentLinks } from './SidebarLinks';
import './Sidebar.css';

class Sidebar extends React.Component {

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

    render () {
        return (
            <nav className="col-md-3 col-lg-2 bg-light sidebar p-0 d-none d-md-block">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        {this.renderMainContentLinks()}
                    </ul>
                    <hr />
                    <ul className="nav flex-column">
                        {this.renderSubContentLinks()}
                    </ul>
                </div>
            </nav>
        );
    }
  }
  
  export default Sidebar;