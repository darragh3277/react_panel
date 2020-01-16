import React from 'react';
import { Link } from "react-router-dom";
import './Sidebar.css'

const sidebarLinks = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "About",
        path: "/about"
    },
]

class Sidebar extends React.Component {
    render () {
        return (
            <nav className="col-md-3 col-lg-2 bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        {sidebarLinks.map((link,i)=>
                            <li className="nav-item">
                                <Link key={i} className="nav-link text-secondary" to={link.path}>{link.label}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
  }
  
  export default Sidebar;