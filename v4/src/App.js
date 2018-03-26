import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CollectionsPage from "./pages/CollectionsPage";
import AllPhotosPage from "./pages/AllPhotosPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={CollectionsPage} />
        <Route exact path="/all" component={AllPhotosPage} />
      </Switch>
    );
  }
}

export default App;
