import React, { Component } from "react";

class Modal extends Component {
  render() {
    const { photo, hidden, handleClose } = this.props;
    return (
      <dialog className="modal" open={hidden ? false : true}>
        <div className="head">
          <a
            href="javascript:void(0)"
            className="close"
            onClick={e => handleClose(e)}
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
