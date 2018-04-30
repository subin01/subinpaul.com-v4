import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import Firebase from "./Firebase";
import Footer from "./pages/Footer";

import "./styles/normalize.css";
import "./styles/index.css";

Firebase.init();

ReactDOM.render(
  <section>
    <section id="main">
      <HashRouter>
        <App />
      </HashRouter>
    </section>

    <Footer />
  </section>,
  document.getElementById("root")
);
