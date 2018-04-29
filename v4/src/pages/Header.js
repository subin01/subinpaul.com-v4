import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="grid-wrap">
          <a className="logo" href="#/">
            SubinPaul.com
          </a>

          <nav>
            <ul>
              <li className="home">
                <a href="#/">Home</a>
              </li>

              <li>
                <a href="#/collections">Collections</a>
              </li>

              <li>
                <a href="#/about">About</a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/subinpaulphotography"
                  target="_blank"
                >
                  <i className="fa fa-th" />
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
