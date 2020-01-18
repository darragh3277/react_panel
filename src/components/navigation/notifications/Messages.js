import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'react-feather';

const messages = [
  {
    id: 1,
    from: 'Barry John',
    image: 'images/default_profile.png',
    date: '10/01/2020',
    content: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 2,
    from: 'John Doe',
    image: 'images/default_profile.png',
    date: '10/01/2020',
    content: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 3,
    from: 'Jane Doe',
    image: 'images/default_profile.png',
    date: '10/01/2020',
    content: 'Lorem ipsum dolor sit amet, consectetur',
  },
];

class Messages extends React.Component {
  renderContent = () => {
    return (
      <ul className="list-group notification-messages">
        {messages.map((message, i) => {
          const { id } = message;
          const notificationBox =
            i % 2 === 1 ? 'notification-box bg-gray' : 'notification-box';
          return (
            <Link to="/messages" key={id}>
              <li className={notificationBox}>
                <div className="row">
                  <div className="col-3 text-center">
                    <img
                      src={message.image}
                      alt="User profile"
                      className="w-50 rounded-circle"
                    />
                  </div>
                  <div className="col-9">
                    <strong className="text-info">{message.from}</strong>
                    <div>{message.content}</div>
                    <small className="text-warning">{message.date}</small>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    );
  };

  render() {
    const numberMessages = messages.length;

    return (
      <div className="col-2 px-0 text-center dropdown">
        <Mail
          className="icon cursor-pointer"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        />
        <span
          className="badge badge-pill badge-success cursor-pointer"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {numberMessages}
        </span>
        <ul className="dropdown-menu dropdown-wide">
          <li className="head text-light bg-dark">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-12">
                <span>Messages ({numberMessages})</span>
                <a href="/" className="float-right text-light">
                  Mark all as read
                </a>
              </div>
            </div>
          </li>
          {this.renderContent()}
          <li className="footer bg-dark text-center">
            <Link to="/messages" className="text-light">
              View All
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Messages;
