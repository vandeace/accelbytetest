import React from "react";
import Home from "./pages/Home";
import Album from "./pages/Albums";
import User from "./pages/User";
import Nav from "./components/nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/album/:id" component={Album} />
          <Route exact path="/user/:id" component={User} />
          <Route exact path="/favorites" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
