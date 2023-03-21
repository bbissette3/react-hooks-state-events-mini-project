import React from "react";

function CategoryFilter({ categories, selected, setSelected }) {

  const categoryButtons = categories.map((category) => {
    const className = category === selected ? "selected" : null
    return <button key={category} className={className} onClick={() => setSelected(category)}>{category}</button>
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
