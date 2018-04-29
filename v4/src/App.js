import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Firebase from "./Firebase";

import CollectionsLandingPage from "./pages/CollectionsLandingPage";
import CollectionPage from "./pages/CollectionPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

class App extends Component {
  constructor() {
    super();

    this.state = {
      gallery: [],
      tagOptions: [],
      collectionDetails: {
        title: "",
        filter: "",
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

  filterCollectionDetails(collectionOptions, collection) {
    const options = ["dilli", "rajasthan"];
    if (collection && !options.includes(collection)) {
      collection = "home";
    }
    return collectionOptions[collection];
  }

  load() {
    if (window.location.href.indexOf("localhost") !== -1) {
      fetch("gallery-data.json")
        .then(blob => blob.json())
        .then(data => {
          this.setState({
            gallery: Object.values(data.portfolio.gallery),
            tagOptions: data.portfolio.tagOptions,
            collectionDetails: data.portfolio.collectionOptions
          });
        });
    } else {
      Firebase.load().then(snapshot => {
        this.setState({
          gallery: Object.values(snapshot.val().gallery),

          tagOptions: Object.values(snapshot.val().tagOptions),
          collectionDetails: Object.values(snapshot.val().collectionOptions)
        });
      });
    }
  }

  render() {
    return (
      this.state.gallery.length && (
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <HomePage
                {...props}
                gallery={this.filterGalleryByCollection(
                  this.state.gallery,
                  "home"
                )}
                tags={this.state.tagOptions}
                collectionDetails={this.filterCollectionDetails(
                  this.state.collectionDetails,
                  "home"
                )}
                collection="home"
              />
            )}
          />

          <Route
            exact
            path="/collections"
            render={() => <CollectionsLandingPage />}
          />

          <Route exact path="/about" render={() => <AboutPage />} />

          <Route
            path="/collections/:collection"
            render={({ match: { params } }) => (
              <CollectionPage
                gallery={this.filterGalleryByCollection(
                  this.state.gallery,
                  params.collection
                )}
                tags={this.state.tagOptions}
                collectionDetails={this.filterCollectionDetails(
                  this.state.collectionDetails,
                  params.collection
                )}
                collection={params.collection}
              />
            )}
          />
        </Switch>
      )
    );
  }
}

export default App;
