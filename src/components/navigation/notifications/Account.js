import React from 'react';
import { User } from 'react-feather';

class Account extends React.Component {

    render(){
        return (
            <div className="col-1 px-0 text-center pointer">
                <User className="icon dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">Account</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">Logout</a>
                </div>
            </div>
        );
    }
  }
  
  export default Account;