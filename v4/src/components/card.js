import React, { Component } from "react";

class Card extends Component {
  render() {
    const { index, id, title, tags, thumb, handleClick, isBlank } = this.props;
    return (
      <article index={index} id={id} className={isBlank ? "blank" : ""}>
        <a
          href="javascript:void(0)"
          onClick={() => {
            handleClick(index);
          }}
        >
          <figure>
            <img src={thumb} alt="" />
            <figcaption>{title}</figcaption>
            <div className="tags">{tags}</div>
          </figure>
        </a>
      </article>
    );
  }
}

export default Card;
