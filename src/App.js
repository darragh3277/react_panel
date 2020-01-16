import React from 'react';
import {routes} from './Routes'
import Navbar from './components/navigation/navbar/Navbar';
import Sidebar from './components/navigation/sidebar/Sidebar';
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
            <div className="container-fluid">
              <div className="row">
                <Sidebar />
                <main className="col-md-9 col-lg-10 pt-3 px-4">
                  <Switch>
                    {routes.map((route,i)=>
                      <Route key={i} path={route.path} component={route.component} exact></Route>
                    )}
                  </Switch>
                </main>
              </div>
            </div>
        </Router>
      </>
    );
  }

}

export default App;
