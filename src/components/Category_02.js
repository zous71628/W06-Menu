import React from 'react';

const Category_02 = ({ filterItems,categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button key={index} type="button" className="filter-btn" onClick={()=>filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category_02;
