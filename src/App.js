import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    // situate inside GithubState to access State using useReducer
    <GithubState>
      <AlertState>
        {/* add Router by embedding in BrowserRouter */}
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                {/* <Route
                  exact
                  path="/"
                  render={props => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                /> */}
                {/* Create route for single component */}
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
