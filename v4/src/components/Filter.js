import React from "react";

const Filter = ({ tags, filter, handleTagClick }) => {
  return (
    <nav className="filter">
      <div className="list">
        <span>Quick Filter</span>
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
      </div>
    </nav>
  );
};

export default Filter;
