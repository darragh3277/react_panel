import React from 'react';
import { Link } from 'react-router-dom';
import { Bell } from 'react-feather';

const notifications = [
  {
    id: 1,
    date: '10/01/2020',
    content:
      'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 2,
    date: '10/01/2020',
    content: 'Lorem ipsum dolor sit amet, consectetur',
  },
];

class Notifications extends React.Component {
  renderContent = () => {
    return (
      <ul className="list-group notification-messages">
        {notifications.map(({ id, content, date }, i) => {
          const notificationBox =
            i % 2 === 1
              ? 'notification-box bg-gray px-3'
              : 'notification-box px-3';
          return (
            <Link to="/notifications" key={id}>
              <li className={notificationBox}>
                <div className="row">
                  <div className="col">
                    <div>{content}</div>
                    <small className="text-warning">{date}</small>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    );
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
        <span
          className="badge badge-pill badge-primary cursor-pointer"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {numberNotifications}
        </span>
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
