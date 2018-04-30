import React from "react";

const getCollectionsList = collections => {
  return Object.keys(collections).map((key, i) => {
    const collection = collections[key];
    return (
      collection.title && (
        <li key={i}>
          <h2>
            <a href={`#/collections/${key}`}>{collection.title}</a>
          </h2>
          <span>{collection.intro}</span>
        </li>
      )
    );
  });
};

const Collections = ({ collectionOptions }) => {
  return (
    <ul className="collections">{getCollectionsList(collectionOptions)}</ul>
  );
};

export default Collections;
