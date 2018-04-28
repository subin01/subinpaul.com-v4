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
        <Route exact path="/" render={() => <HomePage />} />

        <Route
          exact
          path="/collections"
          render={() => <CollectionsLandingPage />}
        />

        <Route exact path="/about" render={() => <AboutPage />} />

        <Route
          path="/collections/:collection"
          render={props => (
            <CollectionPage {...props} otherPayload={"testPayload"} />
          )}
        />
      </Switch>
    );
  }
}

export default App;
