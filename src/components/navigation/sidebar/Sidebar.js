import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainContentLinks, subContentLinks } from './SidebarLinks';
import './Sidebar.css';

class Sidebar extends React.Component {
  renderMainContentLinks = () => {
    return (
      <>
        {mainContentLinks.map((link, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="nav-item ml-1" key={i}>
            <NavLink
              className="nav-link text-secondary"
              activeClassName="active"
              exact
              to={link.path}
            >
              {link.icon} {link.label}
            </NavLink>
          </li>
        ))}
      </>
    );
  };

  renderSubContentLinks = () => {
    return (
      <>
        {subContentLinks.map((link, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="nav-item ml-1" key={i}>
            <NavLink
              className="nav-link text-secondary"
              activeClassName="active"
              exact
              to={link.path}
            >
              {link.icon} {link.label}
            </NavLink>
          </li>
        ))}
      </>
    );
  };

  render() {
    return (
      <nav className="col-md-3 col-lg-2 bg-light sidebar p-0 d-none d-md-block">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">{this.renderMainContentLinks()}</ul>
          <hr />
          <ul className="nav flex-column">{this.renderSubContentLinks()}</ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
