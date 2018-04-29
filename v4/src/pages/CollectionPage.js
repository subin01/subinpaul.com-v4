import React, { Component } from "react";
import Collection from "../components/Collection";
import Header from "./Header";

export default class CollectionPage extends Component {
  //@TODO: Redirect invalid collection-route to Home
  // this.props.history.push("/");

  render() {
    return (
      <main className="page page-collection">
        <Header {...this.props} />
        <Collection {...this.props} />
      </main>
    );
  }
}
