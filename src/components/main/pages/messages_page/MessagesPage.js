import React from 'react';
import PageTitle from '../../page_header/PageHeader';
import Messages from '../../cards/messages/Messages';

const MessagesPage = () => {
  return (
    <>
      <PageTitle title="Messages" />
      <div className="row">
        <div className="col-lg-12 col-xl-10">
          <Messages />
        </div>
      </div>
    </>
  );
};

export default MessagesPage;
