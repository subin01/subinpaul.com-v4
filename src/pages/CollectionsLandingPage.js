import React from "react";
import Collections from "../components/Collections";
import Header from "./Header";

const CollectionsLandingPage = props => {
  return (
    <main className="page page-collections">
      <Header {...props} />
      <div className="grid-wrap">
        <h1>Collections</h1>
        <Collections collectionOptions={props.collectionOptions} />
      </div>
    </main>
  );
};

export default CollectionsLandingPage;
