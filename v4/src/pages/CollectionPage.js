import React, { Component } from "react";
import Collection from "../components/Collection";
import Firebase from "../Firebase";
import { Link } from "react-router-dom";

export default class CollectionPage extends Component {
  constructor() {
    super();

    this.state = {
      currentCollection: "home",
      gallery: [],
      tagOptions: [],
      collectionDetails: {}
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    console.log("DATA:", this.props);

    let currentCollection = "",
      options = ["dilli", "rajasthan"];

    if (!params.collection) {
      this.load();
      return;
    }

    if (params.collection && options.includes(params.collection)) {
      currentCollection = params.collection;
      this.setState({ currentCollection });
      this.load();
    } else if (params.path !== "/") {
      this.props.history.push("/");
    }
  }

  filterGalleryByCollection(gallery, collection) {
    return gallery.filter((photoObj, index) => {
      if (collection === "" || photoObj.collections.includes(collection)) {
        return true;
      }
      return false;
    });
  }

  load() {
    if (window.location.href.indexOf("localhost") !== -1) {
      fetch("gallery-data.json")
        .then(blob => blob.json())
        .then(data => {
          this.setState({
            gallery: this.filterGalleryByCollection(
              Object.values(data.portfolio.gallery),
              this.state.currentCollection
            ),
            tagOptions: data.portfolio.tagOptions,
            collectionDetails:
              data.portfolio.collectionOptions[this.state.currentCollection]
          });
        });
    } else {
      Firebase.load().then(snapshot => {
        this.setState({
          gallery: this.filterGalleryByCollection(
            Object.values(snapshot.val().gallery),
            this.state.currentCollection
          ),
          tagOptions: Object.values(snapshot.val().tagOptions),
          collectionDetails: Object.values(
            snapshot.val().collectionOptions[this.state.currentCollection]
          )
        });
      });
    }
  }

  render() {
    return (
      <main className="page-collections">
        <Collection
          gallery={this.state.gallery}
          tags={this.state.tagOptions}
          collection={this.state.currentCollection}
          collectionDetails={this.state.collectionDetails}
        />
      </main>
    );
  }
}
