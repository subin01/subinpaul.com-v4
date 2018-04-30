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
      pages: {},
      collectionOptions: {}
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

  filterCollectionOptions(collectionOptions, collection) {
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
            collectionOptions: data.portfolio.collectionOptions,
            pages: data.portfolio.pages
          });
        });
    } else {
      Firebase.load().then(snapshot => {
        this.setState({
          gallery: Object.values(snapshot.val().gallery),
          tagOptions: Object.values(snapshot.val().tagOptions),
          collectionOptions: Object.values(snapshot.val().collectionOptions),
          pages: Object.values(snapshot.val().pages)
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
                collectionDetails={this.filterCollectionOptions(
                  this.state.collectionOptions,
                  "home"
                )}
                collection="home"
                pages={this.state.pages}
              />
            )}
          />

          <Route
            exact
            path="/collections"
            render={props => (
              <CollectionsLandingPage
                {...props}
                collectionOptions={this.state.collectionOptions}
                pages={this.state.pages}
              />
            )}
          />

          <Route
            exact
            path="/about"
            render={props => <AboutPage {...props} pages={this.state.pages} />}
          />

          <Route
            path="/collections/:collection"
            render={props => (
              <CollectionPage
                {...props}
                gallery={this.filterGalleryByCollection(
                  this.state.gallery,
                  props.match.params.collection
                )}
                tags={this.state.tagOptions}
                collectionDetails={this.filterCollectionOptions(
                  this.state.collectionOptions,
                  props.match.params.collection
                )}
                collection={props.match.params.collection}
                pages={this.state.pages}
              />
            )}
          />
        </Switch>
      )
    );
  }
}

export default App;
