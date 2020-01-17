import React from 'react';
import { Bell, User } from 'react-feather';
import Notifications from './Notifications';
import './NotificationsMenu.css';

class NotificationsMenu extends React.Component {
    render(){
        return (
            <div className="container notifications d-none d-md-block text-light">
                <div className="row justify-content-end">
                    <div className="notification-alert col-2 px-0 text-center">
                        <Bell className="icon" />
                        <span class="badge badge-pill badge-primary">1</span>
                    </div>
                    <Notifications />
                    <div className="notification-alert col-1 px-0 text-center">
                        <User className="icon" />
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default NotificationsMenu;