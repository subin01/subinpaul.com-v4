import React from "react";
import Collection from "../components/Collection";
import Header from "./Header";

const CollectionPage = props => {
  //@TODO: Redirect invalid collection-route to Home
  // this.props.history.push("/");

  return (
    <main className="page page-collection">
      <Header {...props} />
      <Collection {...props} />
    </main>
  );
};

export default CollectionPage;
