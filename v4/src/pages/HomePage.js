import React, { Component } from "react";
import Collection from "../components/Collection";

export default class HomePage extends Component {
  render() {
    return (
      <main className="page-home">
        <Collection {...this.props} />
      </main>
    );
  }
}
