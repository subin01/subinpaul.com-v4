import React from "react";

const Modal = ({ photo, hidden, handleClose }) => {
  return (
    <dialog
      open={hidden ? false : true}
      className={hidden ? "hidden" : "visible"}
    >
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
        <div className="wrap">
          <img src={photo.url} alt="" />
        </div>
        <figcaption>{photo.title}</figcaption>
        <div className="tags">{photo.tags}</div>
      </figure>
    </dialog>
  );
};

export default Modal;
