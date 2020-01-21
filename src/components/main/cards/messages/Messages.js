import React from 'react';
import './Messages.css';

const messages = [
  {
    id: 1,
    from: 'Barry John',
    image: 'images/default_profile.png',
    date: '10/01/2020',
    content:
      'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
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
  renderMessages = () => {
    return (
      <div className="pt-2 row">
        <div className="col-12">
          <ul className="list-group list-group-flush">
            {messages.map(message => {
              const { id } = message;
              return (
                <li
                  key={id}
                  className="pb-0 list-group-item my-0 list-group-item-action border-bottom cursor-pointer"
                >
                  <div className="row">
                    <div className="col-12">
                      <strong className="text-info">{message.from}</strong>
                      <small className="text-warning float-right">
                        {message.date}
                      </small>
                      <div className="col-12 text-truncate d-inline-block pl-0">
                        {message.content}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  renderLoadMore = () => {
    return (
      <div className="pt-2 row justify-content-center">
        <button type="button" className="align-center btn btn-primary btn-sm">
          Load more
        </button>
      </div>
    );
  };

  render() {
    return (
      <>
        <div className="card card-small" id="messages-card">
          <div className="card-body pt-1">
            {this.renderMessages()}
            {this.renderLoadMore()}
          </div>
        </div>
      </>
    );
  }
}

export default Messages;
