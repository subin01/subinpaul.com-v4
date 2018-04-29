import React from "react";

const Card = ({ index, id, title, tags, thumb, handleClick, isBlank }) => {
  return (
    <article index={index} id={id} className={isBlank ? "blank" : ""}>
      <a
        href="javascript:void(0)"
        onClick={() => {
          handleClick(index);
        }}
      >
        <figure>
          <img src={thumb} alt={title} />
          <figcaption>{title}</figcaption>
          <div className="tags">{tags}</div>
        </figure>
      </a>
    </article>
  );
};

export default Card;
