import React from "react";

const Card = ({ index, id, title, tags, thumb, handleClick, isBlank }) => {
  const divStyle = {
    backgroundImage: "url(" + thumb + ")"
  };

  return (
    <article index={index} id={id} className={isBlank ? "blank" : ""}>
      <a
        href="javascript:void(0)"
        onClick={() => {
          handleClick(index);
        }}
      >
        <figure style={divStyle}>
          <figcaption>{title}</figcaption>
          <div className="tags">{tags}</div>
        </figure>
      </a>
    </article>
  );
};

export default Card;
