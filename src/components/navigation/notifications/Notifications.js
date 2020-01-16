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
                        <span className="badge badge-pill badge-primary position-absolute">3</span>
                    </div>
                    <div className="notification-alert col-2 px-0 text-center">
                        <Mail className="icon dropdown-toggle" />
                        <span className="badge badge-pill badge-success position-absolute">2</span>
                        <div className="dropdown-panel bg-light text-dark text-left ml-2 border rounded">
                            <div className="bg-light text-dark">You have 2 new messages</div>
                            <div>test</div>
                        </div>
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