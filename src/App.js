import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/register/Index";
import Signin from "./components/signin/Index"
import Home from "./components/home/Index";
import Profile from "./components/profile/Index"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/Profile">
            <Profile/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
