import React, { Component } from "react";
import Collection from "./Collection";
import Firebase from "../Firebase";

export default class CollectionContainer extends Component {
  constructor() {
    super();

    this.state = {
      gallery: [],
      tagOptions: [],
      collectionDetails: {
        title: "",
        message: ""
      }
    };
  }

  componentDidMount() {
    this.load();
  }

  //@TODO: Check if the collection give is valid one or not

  filterGalleryByCollection(gallery, collection) {
    const options = ["dilli", "rajasthan"];
    if (!options.includes(collection)) {
      collection = "home";
    }

    return gallery.filter((photoObj, index) => {
      if (collection === "" || photoObj.collections.includes(collection)) {
        return true;
      }
      return false;
    });
  }

  load() {
    console.log("this.props.collection::", this.props.collection);
    if (window.location.href.indexOf("localhost") !== -1) {
      fetch("gallery-data.json")
        .then(blob => blob.json())
        .then(data => {
          this.setState({
            gallery: this.filterGalleryByCollection(
              Object.values(data.portfolio.gallery),
              this.props.collection
            ),
            tagOptions: data.portfolio.tagOptions,
            collectionDetails:
              data.portfolio.collectionOptions[this.props.collection]
          });
        });
    } else {
      Firebase.load().then(snapshot => {
        this.setState({
          gallery: this.filterGalleryByCollection(
            Object.values(snapshot.val().gallery),
            this.props.collection
          ),
          tagOptions: Object.values(snapshot.val().tagOptions),
          collectionDetails: Object.values(
            snapshot.val().collectionOptions[this.props.collection]
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
          collection={this.props.collection}
          collectionDetails={this.state.collectionDetails}
        />
      </main>
    );
  }
}
