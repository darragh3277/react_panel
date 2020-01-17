import React from 'react';
import PageTitle from '../../page_header/PageHeader';

class PageNotFound extends React.Component {

    render(){
        return (
            <>
                <PageTitle title="Page Not Found" />
                <p>Sorry the page you are looking for is not here</p>
            </>
        );
    }
  }
  
  export default PageNotFound;