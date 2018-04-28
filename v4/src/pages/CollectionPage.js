import React, { Component } from "react";
import CollectionContainer from "../components/CollectionContainer";

export default class CollectionPage extends Component {
  //@TODO: Redirect invalid collection-route to Home
  // this.props.history.push("/");

  render() {
    const { match: { params } } = this.props;

    return (
      <main className="page-collections">
        <CollectionContainer collection={params.collection} />
      </main>
    );
  }
}
