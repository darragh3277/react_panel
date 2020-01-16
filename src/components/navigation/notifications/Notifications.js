import React from 'react';
import { Bell, Mail, User } from 'react-feather';
import './Notifications.css'

class Notifications extends React.Component {
    render(){
        return (
            <div className="container notifications d-none d-md-block text-light">
                <div className="row justify-content-end">
                    <div className="notification-alert col-2 px-0 text-center">
                        <Bell className="icon" />
                        <span class="badge badge-pill badge-primary">1</span>
                    </div>
                    <div className="notification-alert col-2 px-0 text-center">
                        <Mail className="icon" />
                        <span class="badge badge-pill badge-success">2</span>
                    </div>
                    <div className="notification-alert col-1 px-0 text-center">
                        <User className="icon" />
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Notifications;