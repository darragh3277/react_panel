import React from 'react';
import './Notifications.css';

const notifications = [
  {
    id: 1,
    date: '10/01/2020',
    content:
      'Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 2,
    date: '10/01/2020',
    content: 'Lorem ipsum dolor sit amet, consectetur',
  },
];

class Notifications extends React.Component {
  renderNotifications = () => {
    return (
      <>
        {notifications.map(notification => {
          const { id } = notification;
          return (
            <li
              key={id}
              className="pb-0 list-group-item my-0 list-group-item-action border-bottom cursor-pointer"
            >
              <div className="row">
                <div className="col-12">
                  <small className="text-warning">{notification.date}</small>
                  <div className="col-12 text-truncate d-inline-block pl-0">
                    {notification.content}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </>
    );
  };

  render() {
    return (
      <>
        <div className="card card-small" id="notifications-card">
          <div className="card-body pt-1">
            <div className="pt-2 row">
              <div className="col-12">
                <ul className="list-group list-group-flush">
                  {this.renderNotifications()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Notifications;
