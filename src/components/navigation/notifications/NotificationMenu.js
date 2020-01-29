import React from 'react';
import Notifications from './Notifications';
import Messages from './Messages';
import Account from './Account';
import './NotificationMenu.css';

const NotificationsMenu = () => {
  return (
    <div
      className="container d-none d-md-block text-light mr-4"
      id="notification-menu"
    >
      <div className="row justify-content-end">
        <Notifications />
        <Messages />
        <Account />
      </div>
    </div>
  );
};

export default NotificationsMenu;
