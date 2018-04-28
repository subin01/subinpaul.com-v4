import React, { Component } from "react";
import CollectionContainer from "../components/CollectionContainer";

export default class HomePage extends Component {
  render() {
    return (
      <main className="page-home">
        <CollectionContainer collection="home" />
      </main>
    );
  }
}
