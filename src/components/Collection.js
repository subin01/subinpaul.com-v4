import React, { Component } from "react";
import Filter from "./Filter";
import Card from "./Card";
import Modal from "./Modal";
class Collection extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: 0,
      filter: "",
      modal: {
        isLoading: false,
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

  handleCardClick = id => {
    this.setState(
      {
        currentItem: id,
        modal: { hidden: false, photo: this.props.gallery[id], isLoading: true }
      },
      () => {
        document.querySelector("html").classList.add("dialog-on");
        document.querySelector("dialog").style.top =
          document.querySelector("html").scrollTop + "px";
      }
    );
  };

  handleOnLoad = () => {
    this.setState({
      modal: { ...this.state.modal, isLoading: false }
    });
  };

  handleClose() {
    this.setState(
      {
        modal: { ...this.state.modal, hidden: true }
      },
      () => {
        document.querySelector("html").classList.remove("dialog-on");
      }
    );
  }

  handlePrevious() {
    this.previousItem(this.state.currentItem, this.props.gallery);
  }

  handleNext() {
    this.nextItem(this.state.currentItem, this.props.gallery);
  }

  nextItem(id, gallery) {
    console.log("nextItem");
    id = id + 1;
    id = id % gallery.length;
    this.setState({
      currentItem: id,
      modal: { photo: gallery[id], isLoading: true }
    });
  }

  previousItem(id, gallery) {
    console.log("prevItem");

    id = id === 0 ? gallery.length : id;
    id = id - 1;

    this.setState({
      currentItem: id,
      modal: { photo: gallery[id], isLoading: true }
    });
  }

  getThumbURL(url) {
    const thumb = "-240x240.jpg";
    return url.indexOf(thumb) > -1 ? url : url.replace(".jpg", thumb);
  }

  getPanelList(gallery, filter) {
    return gallery.map((photoObj, index) => {
      photoObj["thumb"] = this.getThumbURL(photoObj.url);

      if (filter === "" || photoObj.tags.includes(filter)) {
        return (
          <Card
            key={index}
            index={index}
            {...photoObj}
            handleClick={this.handleCardClick}
          />
        );
      } else {
        return (
          <Card
            key={index}
            index={index}
            id={index}
            {...photoObj}
            isBlank={true}
          />
        );
      }
    });
  }

  render() {
    const { tags, gallery } = this.props;
    const { title, message, filter } = this.props.collectionDetails || "";
    return (
      <div>
        <div className="collection">
          <div className="grid-wrap">
            {title && <h1>{title}</h1>}
            <div
              className="message"
              dangerouslySetInnerHTML={{
                __html: message
              }}
            />
          </div>
          {filter && (
            <Filter
              tags={tags}
              filter={this.state.filter}
              handleTagClick={this.handleTagClick}
            />
          )}
          <div className="gallery">
            {this.getPanelList(gallery, this.state.filter)}
          </div>
        </div>
        <Modal
          {...this.state.modal}
          handlePrevious={this.handlePrevious.bind(this)}
          handleNext={this.handleNext.bind(this)}
          handleClose={this.handleClose.bind(this)}
          handleOnLoad={this.handleOnLoad.bind(this)}
        />
      </div>
    );
  }
}

export default Collection;
