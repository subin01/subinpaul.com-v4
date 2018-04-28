import React, { Component } from "react";
export default class Collections extends Component {
  getCollectionsList(collections) {
    return Object.keys(collections).map((key, i) => {
      const collection = collections[key];
      return (
        collection.title && (
          <li key={i}>
            <a href={`#/collections/${key}`}>{collection.title}</a>
          </li>
        )
      );
    });
  }
  render() {
    return <ul>{this.getCollectionsList(this.props.collectionOptions)}</ul>;
  }
}
