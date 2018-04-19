import React, { Component } from "react";
import Filter from "./Filter";
import Card from "./Card";
import Modal from "./Modal";
class Collections extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: 0,
      filter: "",
      modal: {
        hidden: true,
        photo: {
          url: ""
        }
      }
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", e => this.handleKeydown(e));
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", e => this.handleKeydown(e));
  }
  handleKeydown(e) {
    console.log("handleKeydown event", e.code);

    switch (e.code) {
      case "ArrowLeft":
        this.previousItem(this.state.currentItem, this.props.gallery);
        break;
      case "ArrowRight":
      case "Space":
        this.nextItem(this.state.currentItem, this.props.gallery);
        break;
      case "Escape":
        this.handleClose();
        break;
      default:
        break;
    }
  }

  handleTagClick = filter => {
    this.setState({ filter: filter });
  };

  handleCardClick(id) {
    this.setState(
      {
        currentItem: id,
        modal: { hidden: false, photo: this.props.gallery[id] }
      },
      () => {
        console.log(this.state);
      }
    );
  }

  nextItem(id, gallery) {
    console.log("nextItem");
    id = id + 1;
    id = id % gallery.length;
    this.setState({
      currentItem: id,
      modal: { photo: gallery[id] }
    });
  }

  previousItem(id, gallery) {
    console.log("prevItem");

    id = id === 0 ? gallery.length : id;
    id = id - 1;

    this.setState({
      currentItem: id,
      modal: { photo: gallery[id] }
    });
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

  getPanelList(gallery, filter, collection) {
    return gallery
      .filter((photoObj, index) => {
        if (collection === "" || photoObj.collections.includes(collection)) {
          return true;
        }
        return false;
      })
      .map((photoObj, index) => {
        photoObj["thumb"] = this.getThumbURL(photoObj.url);

        if (filter === "" || photoObj.tags.includes(filter)) {
          return (
            <Card
              key={index}
              {...photoObj}
              handleClick={() => this.handleCardClick(index)}
            />
          );
        } else {
          return <Card key={index} {...photoObj} isBlank={true} />;
        }
      });
  }

  render() {
    return (
      <div className="grid-wrap">
        <Filter
          tags={this.props.tags}
          filter={this.state.filter}
          handleTagClick={this.handleTagClick.bind(this)}
        />
        <div className="gallery">
          {this.getPanelList(
            this.props.gallery,
            this.state.filter,
            this.props.collection
          )}
        </div>
        <Modal
          {...this.state.modal}
          handleClose={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}

export default Collections;
