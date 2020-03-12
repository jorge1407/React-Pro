import React from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./Home";
import { About } from "./Register";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={About} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
