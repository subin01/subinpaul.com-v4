import React, { Component } from "react";

class Filter extends Component {
  render() {
    const { tags, filter, handleTagClick } = this.props;
    return (
      <nav className="filter">
        <span>Quick Portfolio: </span>
        {tags.map((tag, i) => (
          <a
            key={i}
            href="#"
            className={filter === tag ? "selected" : ""}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </a>
        ))}
      </nav>
    );
  }
}

export default Filter;
