import React, { Component } from "react";

export default class Header extends Component {
  getPageList() {
    console.log("Header", this.props);

    const { match, pages } = this.props;

    return Object.keys(pages).map((page, i) => {
      const pageUrl = pages[page];
      return (
        <li key={i} className={page}>
          <a
            className={match.url === pageUrl ? "active" : ""}
            href={"#" + pageUrl}
          >
            {page}
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <header>
        <div className="grid-wrap">
          <a className="logo" href="#/">
            SubinPaul.com
          </a>

          <nav>
            <ul>{this.getPageList()}</ul>
          </nav>
        </div>
      </header>
    );
  }
}
