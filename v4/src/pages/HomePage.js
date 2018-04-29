import React, { Component } from "react";
import Collection from "../components/Collection";
import Header from "./Header";

export default class HomePage extends Component {
  render() {
    return (
      <main className="page-home">
        <Header {...this.props} />
        <Collection {...this.props} />
      </main>
    );
  }
}
