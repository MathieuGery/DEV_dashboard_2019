import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard.js";
import { Login } from "./components/Login/Login.js";
import { Signup } from "./components/Signup/Signup.js";
import { PrivateRoute } from "./components/PrivateRoute.js";
import { NotFound } from "./components/404NotFound/NotFound.js";
import "./App.css";
import "./styles/tailwind.css"
import CalendarGoogle from "./components/Dashboard/CalendarGoogle"
import { toast } from 'react-toastify';

toast.configure();
class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="App">
          <div className="App-content">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/test" component={CalendarGoogle} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
        </BrowserRouter>
    );
  }
}
export default App;