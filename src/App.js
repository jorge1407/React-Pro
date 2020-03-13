import React from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./Home";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Register" />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
