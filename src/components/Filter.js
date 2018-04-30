import React from "react";

const Filter = ({ tags, filter, handleTagClick }) => {
  tags = tags.slice();
  tags.push("all");

  return (
    <nav className="filter">
      <div className="list">
        <span>Quick Filter</span>
        {tags.map((tag, i) => {
          const selectedTag = tag === "all" ? "" : tag;
          return (
            <a
              key={i}
              href="javascript:void(0)"
              className={filter === selectedTag ? "selected" : ""}
              onClick={() => handleTagClick(selectedTag)}
            >
              {tag}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Filter;
