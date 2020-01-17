import React from 'react';
import { Bell } from 'react-feather';

const notifications = [
    {
        date: "10/01/2020",
        content: "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur"
    },
    {
        date: "10/01/2020",
        content: "Lorem ipsum dolor sit amet, consectetur"
    }
]

class Notifications extends React.Component {

    renderContent = () => {
        return (
            <ul className="list-group notification-messages">
                {notifications.map((notification,i)=>
                    {
                        let notificationBox = i % 2 === 1 ? 'notification-box bg-gray px-3' : 'notification-box px-3';
                        return (
                            <li className={notificationBox} key={i}>
                                <div className="row">   
                                    <div className="col">
                                        <div>{notification.content}</div>
                                        <small className="text-warning">{notification.date}</small>
                                    </div>    
                                </div>
                            </li>
                        );
                    }
                )}
            </ul>
        )
    }

    render(){
        let numberNotifications = notifications.length;
        return (
            <div className="col-2 px-0 text-center dropdown pointer">
                <Bell className="icon" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                <span className="badge badge-pill badge-primary"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{numberNotifications}</span>
                <ul className="dropdown-menu dropdown-wide">
                    <li className="head text-light bg-dark">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <span>Notifications ({numberNotifications})</span>
                                <a href="/" className="float-right text-light">Mark all as read</a>
                            </div>
                        </div>
                    </li>
                    {this.renderContent()}
                    <li className="footer bg-dark text-center">
                        <a href="/" className="text-light">View All</a>
                    </li>
                </ul>
            </div>
        );
    }
  }
  
  export default Notifications;