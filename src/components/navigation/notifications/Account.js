import React from 'react';
import { User } from 'react-feather';
import { Link } from "react-router-dom";

class Account extends React.Component {

    render(){
        return (
            <div className="col-1 px-0 text-center">
                <User className="icon dropdown-toggle cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                <div className="dropdown-menu cursor-pointer">
                    <Link className="dropdown-item" to="/account">Account</Link>

                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">Logout</a>
                </div>
            </div>
        );
    }
  }
  
  export default Account;