import React from 'react';
import './Notifications.css';

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
  renderNoNotifications = () => {
    return <div className="text-center">You have no messages</div>;
  };

  renderNotifications = () => {
    return (
      <ul className="list-group list-group-flush">
        {notifications.map(notification => {
          const { id } = notification;
          return (
            <li
              key={id}
              className="pb-0 list-group-item my-0 list-group-item-action border-bottom cursor-pointer"
            >
              <div className="row">
                <div className="col-12">
                  <strong className="text-info">{notification.type}</strong>
                  <small className="text-warning float-right">
                    {notification.date}
                  </small>
                  <div className="col-12 text-truncate d-inline-block pl-0">
                    {notification.content}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  renderHelper = () => {
    if (notifications.length > 0) {
      return <>{this.renderNotifications()}</>;
    }
    return <>{this.renderNoNotifications()}</>;
  };

  render() {
    return (
      <>
        <div className="card card-small" id="notifications-card">
          <div className="card-body">
            <div className="row">
              <div className="col-12">{this.renderHelper()}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Notifications;
