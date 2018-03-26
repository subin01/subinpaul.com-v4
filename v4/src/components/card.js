import React, { Component } from "react";

class Card extends Component {
  render() {
    const { id, title, tags, url, handleClick } = this.props;
    return (
      <article id={id}>
        <a href="#" onClick={() => handleClick(id)}>
          <figure>
            <img src={url} alt="" />
            <figcaption>{title}</figcaption>
            <div className="tags">{tags}</div>
          </figure>
        </a>
      </article>
    );
  }
}

export default Card;
