import React from "react";

// const handleLoad = e => {
//   alert("loaded");
//   document.querySelector("#preview").classList.remove("loading");
// };

const Modal = ({
  photo,
  isLoading,
  hidden,
  handlePrevious,
  handleNext,
  handleClose,
  handleOnLoad
}) => {
  return (
    <dialog
      open={hidden ? false : true}
      className={hidden ? "hidden" : "visible"}
    >
      <div className="head">
        <a
          href="javascript:void(0)"
          className="icon next"
          onClick={e => handlePrevious(e)}
          title="Previous"
        >
          <span>‹</span>
        </a>
        <a
          href="javascript:void(0)"
          className="icon next"
          onClick={e => handleNext(e)}
          title="Next"
        >
          <span>›</span>
        </a>
        <a
          href="javascript:void(0)"
          className="icon close"
          onClick={e => handleClose(e)}
          title="Close"
        >
          <span> ×</span>
        </a>
      </div>
      <figure className={isLoading ? "loading" : ""}>
        <div className="wrap">
          <span className="loader">Loading...</span>
          <img
            src={photo.url}
            alt={photo.title}
            onLoad={e => handleOnLoad(e)}
          />
        </div>
        <figcaption>{photo.title}</figcaption>
        <div className="tags">{photo.tags}</div>
      </figure>
    </dialog>
  );
};

export default Modal;
