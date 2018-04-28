import React, { Component } from "react";
import Collections from "../components/Collections";
import Firebase from "../Firebase";

export default class CollectionsLandingPage extends Component {
  constructor() {
    super();

    this.state = {
      collectionOptions: {}
    };
  }

  componentDidMount() {
    this.load();
  }

  load() {
    if (window.location.href.indexOf("localhost") !== -1) {
      fetch("gallery-data.json")
        .then(blob => blob.json())
        .then(data => {
          this.setState({
            gallery: Object.values(data.portfolio.gallery),
            tagOptions: data.portfolio.tagOptions,
            collectionOptions: data.portfolio.collectionOptions
          });
        });
    } else {
      Firebase.load().then(snapshot => {
        this.setState({
          collectionOptions: Object.values(snapshot.val().collectionOptions)
        });
      });
    }
  }

  render() {
    return (
      <main className="page-collections">
        <div className="grid-wrap">
          <h1>Collections</h1>
          <Collections collectionOptions={this.state.collectionOptions} />
        </div>
      </main>
    );
  }
}
