import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  const [searchText, setSearchText] = useState(search); // State for search text

  const handleSearchChange = (event) => {
    const newText = event.target.value;
    setSearchText(newText); // Update search text state
    onSearchChange(newText); // Call callback to notify parent component
  };
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText} // Connect input value to state
        onChange={handleSearchChange} // Handle input change
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
