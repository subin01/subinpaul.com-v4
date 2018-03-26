import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="grid-wrap">
          <a className="logo" href="/">
            SubinPaul.com
          </a>

          <nav>
            <ul>
              <li>
                <a href="#/">
                  <i className="fa fa-book" />
                  <span>Home</span>
                </a>
              </li>

              <li>
                <a href="#/stories">
                  <i className="fa fa-book" />
                  <span>Stories</span>
                </a>
              </li>

              <li>
                <a href="#/about">
                  <i className="fa fa-th" />
                  <span>About</span>
                </a>
              </li>

              <li>
                <a href="#/all">
                  <i className="fa fa-th" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
