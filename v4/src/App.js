import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CollectionsLandingPage from "./pages/CollectionsLandingPage";
import CollectionPage from "./pages/CollectionPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/collections/:collection" component={CollectionPage} />
        <Route exact path="/collections" component={CollectionsLandingPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    );
  }
}

export default App;
