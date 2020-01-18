import React from 'react';
import PageTitle from '../../page_header/PageHeader';

const Dashboard = () => {
  return (
    <>
      <PageTitle title="Dashboard" />
      <div className="card card-small">
        <div className="card-body pt-1">
          <div className="pt-3">
            <p>This is a basic dashboard</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
