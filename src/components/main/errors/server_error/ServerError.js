import React from 'react';
import PageTitle from '../../page_header/PageHeader';

class ServerError extends React.Component {

    render(){
        return (
            <>
                <PageTitle title="Error" />
                <p>Something went wrong on the server</p>
            </>
        );
    }
  }
  
  export default ServerError;