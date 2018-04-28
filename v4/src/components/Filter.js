import React from "react";

const Filter = ({ tags, filter, handleTagClick }) => {
  return (
    <nav className="filter">
      <span>Quick Portfolio: </span>
      {tags.map((tag, i) => (
        <a
          key={i}
          href="javascript:void(0)"
          className={filter === tag ? "selected" : ""}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </a>
      ))}
    </nav>
  );
};

export default Filter;
