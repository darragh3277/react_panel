import React from 'react';
import { Link } from "react-router-dom";
import { Home, HelpCircle } from 'react-feather';
import './Sidebar.css';

const sidebarLinks = [
    {
        label: "Dashboard",
        icon: <Home className="icon mr-1" />,
        path: "/"
    },
    {
        label: "About",
        icon: <HelpCircle className="icon mr-1" />,
        path: "/about"
    },
]

class Sidebar extends React.Component {
    render () {
        return (
            <nav className="col-md-3 col-lg-2 bg-light sidebar p-0">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        {sidebarLinks.map((link,i)=>
                            <li className="nav-item">
                                <Link key={i} className="nav-link text-secondary" to={link.path}>{link.icon} {link.label}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
  }
  
  export default Sidebar;