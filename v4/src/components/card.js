import React, { Component } from "react";

class Card extends Component {

  render() {
    const { key, title, tags, url } = this.props;
    return (
      <div className="card" id={key}>
        <div className="content">

          <div className="bg">
            <img src={url} alt='' />
          </div>
          <div>
            {title}
          </div>

          <div className="tags">
            {tags}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
