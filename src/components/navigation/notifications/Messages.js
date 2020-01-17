import React from 'react';
import { Mail } from 'react-feather';

const messages = [
    {
        from: "Barry John",
        image: "images/default_profile.png",
        date: "10/01/2020",
        content: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
        from: "John Doe",
        image: "images/default_profile.png",
        date: "10/01/2020",
        content: "Lorem ipsum dolor sit amet, consectetur"
    },
    {
        from: "Jane Doe",
        image: "images/default_profile.png",
        date: "10/01/2020",
        content: "Lorem ipsum dolor sit amet, consectetur"
    }
]

class Messages extends React.Component {

    renderContent = () => {
        return (
            <ul className="list-group notification-messages">
                {messages.map((message,i)=>
                    {
                        let notificationBox = i % 2 === 1 ? 'notification-box bg-gray' : 'notification-box';
                        return (
                            <li className={notificationBox} key={i}>
                                <div className="row">
                                    <div className="col-3 text-center">
                                        <img src={message.image} alt="User profile" className="w-50 rounded-circle" />
                                    </div>    
                                    <div className="col-9">
                                        <strong className="text-info">{message.from}</strong>
                                        <div>{message.content}</div>
                                        <small className="text-warning">{message.date}</small>
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

        let numberMessages = messages.length;

        return (
            <div className="col-2 px-0 text-center dropdown pointer">
                <Mail className="icon" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                <span className="badge badge-pill badge-success"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{numberMessages}</span>
                <ul className="dropdown-menu">
                    <li className="head text-light bg-dark">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <span>Messages ({numberMessages})</span>
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
  
  export default Messages;