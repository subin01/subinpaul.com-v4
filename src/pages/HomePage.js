import React from "react";
import Collection from "../components/Collection";
import Header from "./Header";

const HomePage = props => {
  return (
    <main className="page-home">
      <Header {...props} />
      <Collection {...props} />
    </main>
  );
};

export default HomePage;
