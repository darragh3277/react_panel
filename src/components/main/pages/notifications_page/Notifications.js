import React from 'react';
import PageTitle from '../../page_header/PageHeader';
import Notifications from '../../cards/notifications/Notifications';

const NotificationsPage = () => {
  return (
    <>
      <PageTitle title="Notifications" />
      <div className="row">
        <div className="col-lg-12 col-xl-10">
          <Notifications />
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
