import React from 'react';
import {routes} from './Routes'
import Navbar from './components/navigation/navbar/Navbar';
import Sidebar from './components/navigation/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import PageNotFound from './components/main/errors/page_not_found/PageNotFound';
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
                <main className="col-md-9 col-lg-10 pt-3 px-0">
                  <div className="container-fluid">
                    <div className="row px-4" id="main-content">
                      <div className="col">
                        <Switch>
                          {routes.map((route,i)=>
                            <Route key={i} path={route.path} component={route.component} exact></Route>
                          )}
                          <Route component={PageNotFound} />
                        </Switch>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col" id="footer">
                        <Footer />
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
        </Router>
      </>
    );
  }

}

export default App;
