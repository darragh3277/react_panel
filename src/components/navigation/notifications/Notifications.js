import React from 'react';
import { Mail } from 'react-feather';
import './Notifications.css';

const notifications = [
    {
        from: "David John",
        image: "images/default_profile.png",
        date: "10/01/2020",
        content: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
        from: "David John",
        image: "images/default_profile.png",
        date: "10/01/2020",
        content: "Lorem ipsum dolor sit amet, consectetur"
    }
]

class Notifications extends React.Component {

    render(){

        let numberNotifications = notifications.length;

        return (
            <div className="notification-alert col-2 px-0 text-center dropdown pointer">
                <Mail className="icon" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                <span class="badge badge-pill badge-success"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">2</span>
                <ul class="dropdown-menu">
                    <li class="head text-light bg-dark">
                        <div class="row">
                            <div class="col-lg-12 col-sm-12 col-12">
                                <span>Notifications ({numberNotifications})</span>
                                <a href="" class="float-right text-light">Mark all as read</a>
                            </div>
                        </div>
                    </li>
                    <ul className="list-group notification-messages">
                    {notifications.map((notification,i)=>
                    {
                        let notificationBox = i % 2 == 1 ? 'notification-box bg-gray' : 'notification-box';
                        return (
                        <li className={notificationBox} key={i}>
                            <div class="row">
                                <div class="col-lg-3 col-sm-3 col-3 text-center">
                                    <img src={notification.image} class="w-50 rounded-circle" />
                                </div>    
                                <div class="col-lg-8 col-sm-8 col-8">
                                    <strong class="text-info">{notification.from}</strong>
                                    <div>{notification.content}</div>
                                    <small class="text-warning">{notification.date}</small>
                                </div>    
                            </div>
                        </li>);
                    }
                    )}
                    </ul>
                    <li class="footer bg-dark text-center">
                        <a href="" class="text-light">View All</a>
                    </li>
                </ul>
            </div>
        );
    }
  }
  
  export default Notifications;