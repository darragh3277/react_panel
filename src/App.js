import React from 'react';
import {routes} from './Routes'
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';

class App extends React.Component {

  render () {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <div className="container-fluid h-100">
              <div className="row h-100">
                <div className="col-md-3 col-lg-2 border">
                  <Sidebar />
                </div>
                <div className="col-md-9 col-lg-10 border">
                  {routes.map((route,i)=>
                    <Route key={i} path={route.path} component={route.component} exact></Route>
                  )}
                </div>
              </div>
            </div>
          </Switch>
        </Router>
      </>
    );
  }

}

export default App;
