import React, { Component } from "react";
import Header from "./Header";

export default class AboutPage extends Component {
  render() {
    return (
      <div className="page page-about">
        <Header {...this.props} />
        <div className="grid-wrap">
          <h1> About </h1>

          <div className="avatar">
            <img
              title="Subin-Paul"
              src="../wp-content/uploads/Subin-Paul.jpg"
              alt=""
            />
          </div>

          <section className="col1">
            <p>
              Hello there! My name is Subin Paul.
              <br /> These are some of the photographs from my eclectic
              collection that I’ve been able to compile over the last four years
              or so. I am more of a weekend photographer than
              a&nbsp;professional one. My passion includes &nbsp;travelling a
              lot, meeting new people and places. This is a humble effort to
              capture&nbsp;the essence of human emotions, the
              &nbsp;ever-enticing Mother Nature and&nbsp;the nuances of our
              proud Indian culture through my lens. Last but not the least, I
              thank you all for your support. For its your appreciation and
              encouragement that &nbsp;gets me going!
            </p>
            <p>Few places I have visited:</p>
            <ul>
              <li> Varanasi</li>
              <li> Kolkata</li>
              <li> Jaipur</li>
              <li> Jodhpur</li>
              <li> Jaisalmer</li>
              <li> Haridwar</li>
              <li> Kashmir</li>
            </ul>
            <p>
              I hope you enjoyed strolling through my collection. You can
              replete my website by filling the form below with your
              comments/criticisms/queries or just drop in a plain old Hi! :)
            </p>
            <p>
              Latest Photography updates on Facebook Page :
              <br />
              <a href="https://www.facebook.com/subinpaulphotography">
                https://www.facebook.com/subinpaulphotography
              </a>
            </p>
            <p>
              Personal Page:
              <br />
              <a href="https://www.facebook.com/paul.subin">
                https://www.facebook.com/paul.subin
              </a>
            </p>
          </section>

          <section className="col2">
            <br /> For the people who are interested in technical side of
            photography, here are the details of gear that I use:
            <p />
            <p>
              -Canon EOS 500D (Body)
              <br /> -Canon EOS 400D (Sold)
              <br /> -Canon EFS 18-55mm (Kit lens)
              <br /> -Tokina 17-50mm f2.8
              <br /> -Canon EFS 55-250mm IS
              <br /> -Canon EF 50mm f1.8 (Prime)
            </p>
            <p>
              I have also tried various stuff from my friends and buddies,
              including:
              <br /> -Sigma 70-300mm DG Macro
              <br /> -Canon 10-22mm
              <br /> -Canon 100-400mm L
              <br /> -Canon EOS 60D
              <br /> -Canon EOS 7D
            </p>
          </section>
        </div>
      </div>
    );
  }
}
