import React from "react";

const Modal = ({ photo, hidden, handleClose }) => {
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
};

export default Modal;
