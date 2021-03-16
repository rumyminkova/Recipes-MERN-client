import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import TopNav from "./components/navigation/TopNav";
import "./App.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopNav />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
