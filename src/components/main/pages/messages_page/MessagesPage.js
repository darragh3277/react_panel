import React from 'react';
import PageTitle from '../../page_header/PageHeader';
import Messages from '../../cards/messages/Messages';

const MessagesPage = () => {
  return (
    <>
      <PageTitle title="Messages" />
      <Messages />
    </>
  );
};

export default MessagesPage;
