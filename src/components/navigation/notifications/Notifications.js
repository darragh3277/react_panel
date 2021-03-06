import React from 'react';
import { Link } from 'react-router-dom';
import { Bell } from 'react-feather';

const notifications = [
  {
    id: 1,
    type: 'Invite',
    date: '10/01/2020',
    content:
      'Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 2,
    type: 'New content',
    date: '10/01/2020',
    content: 'Lorem ipsum dolor sit amet, consectetur',
  },
];

class Notifications extends React.Component {
  renderContent = () => {
    return (
      <ul className="list-group notification-messages">
        {notifications.map(({ id, type, content, date }, i) => {
          const notificationBox =
            i % 2 === 1
              ? 'notification-box bg-gray px-3'
              : 'notification-box px-3';
          return (
            <Link to="/notifications" key={id}>
              <li className={notificationBox}>
                <div className="row">
                  <div className="col">
                    <strong className="text-info">{type}</strong>
                    <small className="text-warning float-right">{date}</small>
                    <div className="text-truncate">{content}</div>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    );
  };

  renderBadge = () => {
    const numberNotifications = notifications.length;
    if (numberNotifications >= 1) {
      return (
        <span
          className="badge badge-pill badge-primary cursor-pointer"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {numberNotifications}
        </span>
      );
    }
    return null;
  };

  render() {
    const numberNotifications = notifications.length;
    return (
      <div className="col-2 px-0 text-center dropdown">
        <Bell
          className="icon cursor-pointer"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        />
        {this.renderBadge()}
        <ul className="dropdown-menu dropdown-wide">
          <li className="head text-light bg-dark">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-12">
                <span>Notifications ({numberNotifications})</span>
                <a href="/" className="float-right text-light">
                  Mark all as read
                </a>
              </div>
            </div>
          </li>
          {this.renderContent()}
          <li className="footer bg-dark text-center">
            <Link to="/notifications" className="text-light">
              View All
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Notifications;
