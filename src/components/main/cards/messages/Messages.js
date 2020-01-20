import React from 'react';

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
      <ul className="list-group list-group-flush">
        {messages.map(message => {
          const { id } = message;
          return (
            <div className="pb-0" key={id}>
              <li className="list-group-item border-bottom my-0 list-group-item-action cursor-pointer">
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
            </div>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <>
        <div className="card card-small">
          <div className="card-body pt-1">
            <div className="pt-3">{this.renderMessages()}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Messages;
