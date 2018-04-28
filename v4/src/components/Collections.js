import React from "react";

const getCollectionsList = collections => {
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
};

const Collections = ({ collectionOptions }) => {
  return <ul>{getCollectionsList(collectionOptions)}</ul>;
};

export default Collections;
