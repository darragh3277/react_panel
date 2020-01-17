import React from 'react';
import Notifications from './Notifications';
import Messages from './Messages';
import Account from './Account';
import './NotificationMenu.css';

const NotificationsMenu = () => {
  return (
    <div className="container d-none d-md-block text-light">
      <div className="row justify-content-end" id="notification-menu">
        <Notifications />
        <Messages />
        <Account />
      </div>
    </div>
  );
};

export default NotificationsMenu;
