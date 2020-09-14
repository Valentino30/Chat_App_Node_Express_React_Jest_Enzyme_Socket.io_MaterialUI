import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import Auth from "./containers/Auth/Auth";
import ChatRoom from "./containers/ChatRoom/ChatRoom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App" test-class="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/join" component={Auth} />
          <Route exact path="/create" component={Auth} />
          <Route exact path="/chat" component={ChatRoom} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
