import React, { Component } from "react";

class Card extends Component {
  render() {
    const { key, id, title, tags, thumb, handleClick, isBlank } = this.props;
    return (
      <article key={key} id={id} className={isBlank ? "blank" : ""}>
        <a href="#" onClick={key => handleClick(key)}>
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
