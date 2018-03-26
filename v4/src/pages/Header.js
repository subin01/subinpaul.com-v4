import React, { Component } from 'react';

export default class Header extends Component {

        render() {
            return (
              <header>
                <div id="subheader">

                  <div className="logo">
                      <a href="profile.html">
                        <img src="./assets/img/ui-sam.jpg" alt="" className="img-circle" width="60" />
                      </a>
                    <h5 className="centered">SubinPaul.com</h5>
                  </div>

                  <ul className="menu">

                    <li>
                      <a href="#/collections">
                        <i className="fa fa-book" />
                        <span>Collections</span>
                      </a>
                    </li>

                    <li>
                      <a href="#/add">
                        <i className="fa fa-th" />
                        <span>Add Photo</span>
                      </a>
                    </li>

                    <li>
                      <a href="#/all">
                        <i className="fa fa-th" />
                        <span>All Uploads</span>
                      </a>
                    </li>


                  </ul>
                </div>
              </header>
            );
    }
}
