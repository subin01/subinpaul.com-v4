import React, { Component } from "react";

class Modal extends Component {
  render() {
    const { photo, hidden, handleClose } = this.props;
    return (
      <dialog open={hidden ? false : true}>
        <div className="head">
          <a
            href="#"
            className="close"
            onClick={() => handleClose()}
            title="Close"
          >
            x
          </a>
        </div>
        <figure>
          <img src={photo.url} alt="" />
          <figcaption>{photo.title}</figcaption>
          <div className="tags">{photo.tags}</div>
        </figure>
      </dialog>
    );
  }
}

export default Modal;
