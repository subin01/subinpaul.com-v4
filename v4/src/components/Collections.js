import React, { Component } from "react";
import Card from "./Card";
import Modal from "./Modal";
import Firebase from "../Firebase";
class Collections extends Component {
  constructor() {
    super();
    console.log("Collections");
    this.state = {
      gallery: {},
      modal: {
        hidden: true,
        photo: {
          url: ""
        }
      }
    };
  }

  componentDidMount() {
    this.load();
    window.addEventListener("keydown", e => this.handleKeydown(e));
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", e => this.handleKeydown(e));
  }
  handleKeydown(e) {
    console.log("handleKeydown event", e.code);

    switch (e.code) {
      case "ArrowLeft":
        break;
      case "ArrowRight":
        break;
      case "Escape":
        this.handleClose();
        break;
      default:
        break;
    }
  }

  load() {
    if (window.location.href.indexOf("localhost") !== -1) {
      fetch("gallery-data.json")
        .then(blob => blob.json())
        .then(data => {
          this.setState({ ...data.portfolio });
        });
    } else {
      Firebase.load().then(snapshot => {
        this.setState({
          gallery: snapshot.val().gallery
        });
      });
    }
  }

  handleClick(id) {
    this.setState(
      {
        modal: { hidden: false, photo: this.state.gallery[id] }
      },
      () => {
        console.log(this.state);
      }
    );
  }

  handleClose() {
    this.setState(
      {
        modal: { ...this.state.modal, hidden: true }
      },
      () => {
        console.log(this.state);
      }
    );
  }

  getThumbURL(url) {
    const thumb = "-240x240.jpg";
    return url.indexOf(thumb) > -1 ? url : url.replace(".jpg", thumb);
  }

  getPanelList(gallery) {
    let panelList = [],
      photoObj;

    for (let key in gallery) {
      photoObj = { ...gallery[key], key };

      photoObj["url"] = this.getThumbURL(photoObj.url);
      panelList.push(
        <Card {...photoObj} handleClick={this.handleClick.bind(this)} />
      );
    }
    return panelList;
  }

  render() {
    return (
      <div className="grid-wrap">
        <div className="gallery">{this.getPanelList(this.state.gallery)}</div>
        <Modal
          {...this.state.modal}
          handleClose={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}

export default Collections;
