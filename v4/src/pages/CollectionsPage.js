import React, { Component } from "react";
import Collections from "../components/Collections";
import Firebase from "../Firebase";

export default class CollectionsPage extends Component {
  constructor() {
    super();
    this.state = {
      gallery: [],
      tagOptions: []
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
            tagOptions: data.portfolio.tagOptions
          });
        });
    } else {
      Firebase.load().then(snapshot => {
        this.setState({
          gallery: Object.values(snapshot.val().gallery),
          tagOptions: Object.values(snapshot.val().tagOptions)
        });
      });
    }
  }

  render() {
    return (
      <main className="page-collections">
        <Collections
          gallery={this.state.gallery}
          tags={this.state.tagOptions}
          collection="home"
        />
      </main>
    );
  }
}
