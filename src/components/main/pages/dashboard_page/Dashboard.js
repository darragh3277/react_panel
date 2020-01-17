import React from 'react';
import PageTitle from '../../page_header/PageHeader';

class Dashboard extends React.Component {
    render () {
        return (
            <>
              <PageTitle title="Dashboard" />
              <p>This is a basic dashboard</p>
            </>
        );
    }
  }
  
  export default Dashboard;