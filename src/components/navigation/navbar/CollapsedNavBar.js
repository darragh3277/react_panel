import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainContentLinks, subContentLinks } from '../sidebar/SidebarLinks';
import './CollapsedNavBar.css';

class CollapsedNavBar extends React.Component {
  renderMainContentLinks = () => {
    return (
      <>
        {mainContentLinks.map((link, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="nav-item ml-1" key={i}>
            <NavLink
              className="nav-link text-secondary"
              activeClassName="active"
              to={link.path}
              exact
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
              to={link.path}
              exact
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
      <div
        className="collapse navbar-collapse d-md-none ml-4"
        id="toggleCollapsedNavBar"
      >
        <ul className="navbar-nav">{this.renderMainContentLinks()}</ul>
        <hr />
        <ul className="navbar-nav">{this.renderSubContentLinks()}</ul>
      </div>
    );
  }
}

export default CollapsedNavBar;
