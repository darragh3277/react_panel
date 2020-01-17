import React from 'react';
import PageTitle from '../../page_header/PageHeader';
import AccountInfo from '../../cards/account_info/AccountInfo';
import AccountDetails from '../../cards/account_details/AccountDetails';

class Account extends React.Component {
    render () {
        return (
            <>
                <PageTitle title="Account" />
                <div className="row">
                    <div className="col-lg-4">
                        <AccountInfo />
                    </div>
                    <div className="col-lg-8">
                        <AccountDetails />
                    </div>
                </div>
            </>
        );
    }
}
  
export default Account;