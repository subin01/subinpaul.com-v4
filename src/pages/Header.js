import React, { Component } from "react";

export default class Header extends Component {
  getPageList() {
    const { match, pages } = this.props;

    return pages.map((page, i) => {
      const absURL = page.url.replace("/#", "/");

      return (
        <li key={i} className={page.title}>
          <a
            className={absURL === match.url ? "active" : ""}
            href={page.url}
            target={page.url.includes("http") ? "_blank" : ""}
          >
            {page.title}
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
