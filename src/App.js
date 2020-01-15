import React from 'react';
import {routes} from './Routes'
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class App extends React.Component {

  render () {
    return (
      <>
        <Router>
          <Navbar />
            <Switch>
              {routes.map((route,i)=>
                <Route key={i} path={route.path} component={route.component} exact></Route>
              )}
            </Switch>
        </Router>
      </>
    );
  }

}

export default App;
