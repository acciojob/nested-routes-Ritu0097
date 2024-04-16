import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Category = () => {
  const { categoryId } = useParams();
  
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      {/* Render the paragraph tag initially */}
      <p>Items:</p>
      <ul>
        {/* Hardcoded item list for demonstration */}
        <li><Link to={`/category/${categoryId}/grooming`} onClick={() => handleItemClick("Grooming")}>Grooming</Link></li>
        <li><Link to={`/category/${categoryId}/shirt`} onClick={() => handleItemClick("Shirts")}>Shirt</Link></li>
        <li><Link to={`/category/${categoryId}/trouser`} onClick={() => handleItemClick("Trousers")}>Trouser</Link></li>
        <li><Link to={`/category/${categoryId}/Jewellery`} onClick={() => handleItemClick("Jewellery")}>Jewellery</Link></li>
      </ul>
      
      {/* Render the selected item text in a paragraph tag */}
      {selectedItem && (
        <p>{selectedItem}</p>
      )}
    </div>
  );
};

export default Category;
