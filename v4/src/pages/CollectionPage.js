import React, { Component } from "react";
import Collection from "../components/Collection";

export default class CollectionPage extends Component {
  //@TODO: Redirect invalid collection-route to Home
  // this.props.history.push("/");

  render() {
    return (
      <main className="page page-collection">
        <Collection {...this.props} />
      </main>
    );
  }
}
