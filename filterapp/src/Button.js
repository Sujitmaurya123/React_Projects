import React from "react";

function Button({ categories, handleClick }) {
  const buttons = categories.map((category, index) => {
    return (
      <div className="button-container" key={index}>
        <button onClick={() => handleClick(category)}>
          {category.toUpperCase()}
        </button>
      </div>
    );
  });

  return <div className="all-buttons">{buttons}</div>;
}

export default Button;
