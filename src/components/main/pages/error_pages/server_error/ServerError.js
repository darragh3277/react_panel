import React from 'react';
import PageTitle from '../../../page_header/PageHeader';

const ServerError = () => {
  return (
    <>
      <PageTitle title="500 Server Error" />
      <p>Something went wrong on the server</p>
    </>
  );
};

export default ServerError;
