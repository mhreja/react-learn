import React from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/auth/Protected.route";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/about" component={About} />
          <ProtectedRoute path="/contact" component={Contact} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="*" component={() => "404 Not Found"} />
        </Switch>
      </Router>
    );
  }
}
