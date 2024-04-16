// Category.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { categoryId, categoryItem } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle item click
  const handleItemClick = (item, e) => {
    e.preventDefault(); // Prevent default link behavior
    setSelectedItem(item);
  };

  return (
    <div>
      {/* Render the paragraph tag initially */}
      <p>Items:</p>
      <ul>
        {/* Hardcoded item list for demonstration */}
        <li><a href={`/category/${categoryId}/grooming`} onClick={(e) => handleItemClick("Grooming", e)}>Grooming</a></li>
        <li><a href={`/category/${categoryId}/shirts`} onClick={(e) => handleItemClick("Shirt", e)}>Shirt</a></li>
        <li><a href={`/category/${categoryId}/trousers`} onClick={(e) => handleItemClick("Trouser", e)}>Trouser</a></li>
        <li><a href={`/category/${categoryId}/jewelry`} onClick={(e) => handleItemClick("Jewellery", e)}>Jewellery</a></li>
      </ul>
      
      {/* Render the selected item text in a paragraph tag */}
      {selectedItem && (
        <p>{selectedItem}</p>
      )}
    </div>
  );
};

export default Category;
